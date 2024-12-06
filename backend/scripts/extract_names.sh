#!/bin/bash

# Check if the input file is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <file>"
    exit 1
fi

input_file=$1
output_file="amazon_users.txt"

# Extract data using Python
python3 <<EOF
import pandas as pd
import sys

# Load the Excel file
try:
    data = pd.ExcelFile("$input_file").parse(0)  # Load the first sheet
    amazon_users = data[data['email'].str.contains('@amazon.com', na=False)]
    names = amazon_users[['first name', 'last name']]

    # Save the output to a text file in the correct format: "first name last name"
    with open("$output_file", "w") as f:
        for _, row in names.iterrows():
            f.write(f"{row['first name']} {row['last name']}\n")

    print(f"Extraction successful. Results saved to $output_file.")
except Exception as e:
    print(f"Error processing the file: {e}")
EOF

# Make the script executable
chmod +x extract_names.sh
