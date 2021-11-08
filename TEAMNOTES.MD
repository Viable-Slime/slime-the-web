# Team notes
This is for maintaining communication about your team's working meetings to "ship" the project.

## Meeting notes
These are notes to be maintained PER date that you meet. What you did and what the next steps are
### Meeting Date

#### What we did:


#### What we'll do next


## Status check ins
These are dedicated status check-ins as this is a multi-week project
### Check-in 1

## Project: Sorting Question -> https://github.com/elmsln/issues/issues/872 


## Project Sketch:
![Project sketch](https://github.com/Viable-Slime/slime-the-web/blob/master/SortingQuestionSketch.jpg)

## Initial Questions:
- How are we going to produce logic that can determine the order of things
- How will we make our element visually appealing
- How will we make the options draggable to different points
- How will we make it so the options are given at random order
- How will we make sure our element is accesible (Language, tab-index, color contrast)
- What states will our element have
- is there a way to hide the hard coded correct options order
- How to make re arrranging options accesible for keyboard users
## Expected Elements:
- Question Heading
- Options Container
- Question Options
- Status Container
- Status label
- Submit button
- slot tag to support adding in options

## Properties:
- At first thought, I'm not understanding any way that the logic will understand the question and know the order, so the user of the element must declare the correct order. we must have a property denoted to assign the correct order of the questions.
- random property would sort the options in a random order each time they are loaded by Render()
- possibly add success / failure audio
- possibly add failure / success animation (confetti, baloons etc...)

## Slots:
- Our element will need to use slots so an implementer can add as many options to sort as they want.

## States:
- Currently unsure about states..... possibly disabled, light, dark , red bad score, orange, 50% score, green 100% score
- Hover states for options and buttons

## HAX:
- Properties mapped to hax will need to be heading title, option elements and option text, light mode, and dark mode



### Check-in 2
- 
- 
### Check-in 3
- 
- 
### Check-in 4
- 
- 
