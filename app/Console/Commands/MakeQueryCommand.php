<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class MakeQueryCommand extends Command
{
    protected $signature = 'make:query {name}';
    protected $description = 'Create a new query class in App\\Queries';

    public function handle(): int
    {
        $nameInput = trim($this->argument('name'));

        // Convert slashes to namespace parts
        $nameParts = collect(explode('/', str_replace('\\', '/', $nameInput)))
            ->filter()
            ->map(fn($part) => Str::studly($part))
            ->values();

        if ($nameParts->isEmpty()) {
            $this->error('❌ Invalid class name.');
            return static::FAILURE;
        }

        $className = $nameParts->last();
        $subNamespace = $nameParts->slice(0, -1)->implode('\\');
        $relativeDir = $nameParts->slice(0, -1)->implode('/');

        $basePath = app_path('Queries');
        $directory = $relativeDir ? "{$basePath}/{$relativeDir}" : $basePath;
        $filePath = "{$directory}/{$className}.php";

        if (File::exists($filePath)) {
            $this->error("❌ Query {$className} already exists.");
            return static::FAILURE;
        }

        File::ensureDirectoryExists($directory);
        File::put($filePath, $this->getStub($className, $subNamespace));

        $namespaceInfo = $subNamespace ? "\\{$subNamespace}" : '';
        $this->info("✅ Query {$className} created successfully at App\\Queries{$namespaceInfo}");

        return static::SUCCESS;
    }

    protected function getStub(string $className, string $subNamespace): string
    {
        $fullNamespace = 'App\\Queries' . ($subNamespace ? "\\{$subNamespace}" : '');

        return <<<PHP
<?php

namespace {$fullNamespace};

class {$className}
{
    // Create new query methods here
}

PHP;
    }
}
