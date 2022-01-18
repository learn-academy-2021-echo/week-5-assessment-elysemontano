# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def contains_letter(array, letter)
    #noticed select is not in syllabus under blocks and iterables which seems to be the best approach for this problem.  Request to add select example and explination in blocks and iterables.

    array.select do |value|

        #would be great to add a link to ruby built in methods for students so they can quickly find the correct syntax for any built in they may need.  Great resource: http://phrogz.net/programmingruby/builtins.html
        value.include? letter
    end
end

p contains_letter(beverages_array, letter_o)
p contains_letter(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

#once again, could not find this built in method in the syllabus however this makes the most sense.
def find_sum array
    array.sum
end

p find_sum(nums_array1)
p find_sum(nums_array2)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


class Bike 
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster number
        @current_speed += number
    end
    def brake number
        if @current_speed - number < 0
            @current_speed = 0
        else
            @current_speed -= number
        end
    end
end

my_bike = Bike.new("Trek bike", 2, 0)
p my_bike.bike_info
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)