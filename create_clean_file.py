with open('../file.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all curly quotes with straight quotes
content = content.replace('\u2018', "'")  # Left single quote
content = content.replace('\u2019', "'")  # Right single quote
content = content.replace('\u201C', '"')  # Left double quote
content = content.replace('\u201D', '"')  # Right double quote  
content = content.replace('\u2026', '...')  # Ellipsis

# Remove the markdown code fences if present
content = content.replace('```\n', '\n')

with open('src/WorkoutTracker.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Created clean WorkoutTracker.jsx')
