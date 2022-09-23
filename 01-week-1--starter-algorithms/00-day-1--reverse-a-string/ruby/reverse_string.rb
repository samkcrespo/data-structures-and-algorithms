def reverse_string(str)
  # type your code in here
  reversed = ""

  str.chars.each do |char|
    reversed = char + reversed
  end

  reversed
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Initialize reversed to empty string
# iterate over each letter in the string, and place each char before prior character
# store result in 'reversed'
# return 'reversed'
# Please add your pseudocode to this file
# And a written explanation of your solution