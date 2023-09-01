def flames_relationship(names):
    # Define the FLAMES word and its meanings
    flames_word = ['F', 'L', 'A', 'M', 'E', 'S']
    meanings = {
        'F': "Friends",
        'L': "Lovers",
        'A': "Attraction",
        'M': "Marriage",
        'E': "Enemies",
        'S': "Siblings"
    }

    # Convert names to lowercase and remove spaces
    names = names.lower().replace(" ", "")

    # Calculate the relationship by eliminating letters from FLAMES
    while len(flames_word) > 1:
        index = len(names) % len(flames_word) - 1
        if index == -1:
            flames_word.pop(index)
        else:
            flames_word.pop(index)
            flames_word = flames_word[index:]+flames_word[:index]

    # The remaining letter in flames_word corresponds to the relationship
    relationship = flames_word[0]

    return meanings[relationship]


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
name1 = input("Enter the first name: ")
name2 = input("Enter the second name: ")

n1, n2 = name1.upper(), name2.upper()
name1, name2 = remove_common_letters(n1, n2)
relationship = flames_relationship(name1 + name2)

print(f"The relationship between {n1} and {n2} is: {relationship}")
