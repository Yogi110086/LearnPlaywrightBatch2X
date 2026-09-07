Param(
    [string]$Message = "",
    [string]$Branch = "",
    [string]$Remote = "origin"
)

function ExitIfError($lastExit) {
    if ($lastExit -ne 0) {
        Write-Error "Previous command failed with exit code $lastExit. Aborting."
        exit $lastExit
    }
}

try {
    Write-Host "Detecting current branch..."
    if ([string]::IsNullOrWhiteSpace($Branch)) {
        $Branch = (& git rev-parse --abbrev-ref HEAD).Trim()
    }
    Write-Host "Branch: $Branch"

    Write-Host "Staging all changes..."
    & git add -A
    ExitIfError $LASTEXITCODE

    $status = (& git status --porcelain)
    if ($status) {
        if ([string]::IsNullOrWhiteSpace($Message)) {
            $Message = "Save workspace changes $(Get-Date -Format 'yyyy-MM-dd_HH:mm:ss')"
        }
        Write-Host "Committing with message: $Message"
        & git commit -m $Message
        ExitIfError $LASTEXITCODE
    }
    else {
        Write-Host "No changes to commit."
    }

    Write-Host "Pushing to $Remote/$Branch (setting upstream if needed)..."
    & git push -u $Remote $Branch
    ExitIfError $LASTEXITCODE

    Write-Host "Push completed successfully."
}
catch {
    Write-Error "Error: $_"
    exit 1
}
