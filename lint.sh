 if [ -n "$(git diff --name-only --cached --diff-filter=d -- '*.tsx' '*.ts' '*.jsx' '*.js')" ]; then
     has_errors=false
     git diff --name-only --cached --diff-filter=d -- '*.tsx' '*.js' '*.jsx'  | while read -r file; do
         yarn prettier --write "$file" || { echo "Prettier encountered an error while formatting $file"; has_errors=true; }
         git add .
     done
     if [ "$has_errors" = true ]; then
         echo "Prettier encountered errors. Aborting commit."
         exit 1
     fi
 fi