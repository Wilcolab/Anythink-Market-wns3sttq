#!/bin/bash

# Check if the input file is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <file>"
    exit 1
fi

input_file=$1
output_file="amazon_users.txt"
