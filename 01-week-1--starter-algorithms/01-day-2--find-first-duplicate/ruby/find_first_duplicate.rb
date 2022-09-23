require 'set'

def find_first_duplicate(arr)
  uniqueSet = Set.new

  arr.each do |value|
    return value if uniqueSet.include?(value)

    uniqueSet.add(value)
  end

  -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

 # init  empty set called uniqueSet
 # 
 # iterate through the array, if value is in uniqueSet, return the value(duplicate)
 # or else, add the value to the set
 # if no duplicate is found, return -1
