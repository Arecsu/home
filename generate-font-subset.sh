#!/bin/bash

# Remove any existing subset files
rm public/inter-4.0/*-subset.woff2 2> /dev/null || true
rm public/inter-4.0/subset/*-subset.woff2 2> /dev/null || true

# Run glyphhanger to create subset fonts
glyphhanger http://localhost:4321 --subset="public/inter-4.0/*.woff2" --formats=woff2 --whitelist=↑↓

# Move and rename each subset file with a random hash
for file in public/inter-4.0/*-subset.woff2; do
    if [ -f "$file" ]; then
        # Generate random hash
        random_hash=$(openssl rand -base64 6 | tr '/' '_' | tr '+' '-')
        
        # Get the base name of the file without -subset.woff2
        basename=$(basename "$file" -subset.woff2)
        
        # Create new filename with random hash inserted before -subset
        new_name="public/inter-4.0/subset/${basename}-${random_hash}-subset.woff2"
        
        # Move and rename the file
        mv "$file" "$new_name"
        
        echo "Renamed: $file -> $new_name"
    fi
done