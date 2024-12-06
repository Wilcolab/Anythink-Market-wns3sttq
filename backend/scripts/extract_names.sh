#!/bin/bash

# Check if an input file is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <input_file>"
    exit 1
fi

input_file=$1
output_file="amazon_users.txt"

# Check if the input file exists
if [ ! -f "$input_file" ]; then
    echo "Error: File '$input_file' not found."
    exit 1
fi

# Output to file
> "$output_file"  # Clear output file before starting

# Loop through each line of the file and extract names with @amazon.com email
while IFS=',' read -r first_name last_name email; do
    if [[ "$email" == *@amazon.com ]]; then
        # Print only the first name and last name in the correct format
        echo "$first_name $last_name" >> "$output_file"
    fi
done < "$input_file"

echo "Extraction complete. Results saved to $output_file."
