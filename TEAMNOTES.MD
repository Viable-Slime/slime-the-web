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
#### Progress
- From this past week we have began to plan our approach the sorting element. We spent time in class discussing how we plan to grab the list items and allow reorganization of the list. We did find on Stack Overflow that we can use the "draggable" attribute on our list item, but we are still testing whether or not we will approach it this way.
- We have split our element currently into a question element, and the various options that will be provided in the list. There are still a few changes that aren't pushed currently, but will be hopefully by tomorrow.
- We have decided to each create our own branch in the repository so that we can all attempt tackling certain portions of the sorting element. Our plan is then to meet and talk about the code we wrote and determine what we will take from each person. We think that this approach is good for the project, but will determine if it is working successfully as we continue to develop. 
#### Next Steps
- Focus on grabbing list items 
- Continue to work on sorting logic
- Will we check the list order to the correct list order upon each move, or upon button click?
### Check-in 3
- From the last check point - we've been regrouping and identifying the focus and action points that we need to take as a group with the project. With the help of Bryan, we have identified some areas that will need to be addressed to optimize our application. Some highlighted focus points that we have identified as a team that are going to be a priority for us to tacke are the implementation of further language capabilities as well as building upon the accessibility of our application. Currently up to this point, we've been working on being able to randomize the options, as well as adding in further buttons to do the sorting as well.
- ![codeSnip](https://user-images.githubusercontent.com/90001492/144116399-489210b5-9507-4e51-a9d6-691c758060db.png)
- Comments: Here is some of the highlighted progress where the plan is for it to be working on randomizing options - > after the correct order of everything is obtained.
### Check-in 4
#### Progress
- After reviewing the requirements for the sorting element, we realized we had to incorporate the up/down arrow sorting functionality into our element, so that feature was added. There was also a reset button added so that the user can reset after they complete sorting the list items. Randomization was also altered to give more potential options for the user to solve upon reset. 
#### Next Steps
- We have to enable translation across our element
- Review further recommendations from professor notes and classmates.
- Look into extra credit option with haxHooks
- We are almost there!!
