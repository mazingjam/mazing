$ErrorActionPreference = "Stop"

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$serverPath = Join-Path $PSScriptRoot "server.mjs"
$bundledNode = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if (Get-Command node -ErrorAction SilentlyContinue) {
  $node = (Get-Command node).Source
} elseif (Test-Path $bundledNode) {
  $node = $bundledNode
} else {
  throw "Node.js was not found in PATH or the Codex bundled runtime."
}

Write-Host "Starting MTGSet mobile viewer..."
Write-Host "Project: $projectRoot"
Write-Host "URL on this computer: http://localhost:4173/app/"
Write-Host "Use ipconfig to find the LAN IPv4 address for phone access."

& $node $serverPath

