def flames_relationship(names):
    # Define the FLAMES word and its meanings
    flames_word = "FLAMES"
    meanings = {
        'F': "Friends",
        'L': "Lovers",
        'A': "Attraction",
        'M': "Marriage",
        'E': "Enemies",
        'S': "Siblings"
    }

    # Calculate the relationship by eliminating letters from FLAMES
    while len(flames_word) > 1:
        index = len(names) % len(flames_word)
        flames_word = flames_word[:index - 1] + flames_word[index:]

    return meanings[flames_word]

def remove_common_letters(name1, name2):
    # Create copies of the names to avoid modifying the original strings
    name1_copy = list(name1)
    name2_copy = list(name2)

    # Iterate through the letters in name1 and remove common letters from both names
    for letter in name1:
        if letter in name2_copy:
            name1_copy.remove(letter)
            name2_copy.remove(letter)

    return "".join(name1_copy), "".join(name2_copy)

print("Welcome to the FLAMES game!")
name1 = input("Enter the first name: ").upper()
name2 = input("Enter the second name: ").upper()
# Remove common letters and spaces
name1, name2 = remove_common_letters(name1.replace(" ", ""), name2.replace(" ", ""))
# Calculate the relationship
relationship = flames_relationship(name1 + name2)

print(f"The relationship between {name1} and {name2} is: {relationship}")