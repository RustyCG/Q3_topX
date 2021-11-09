Question: 
Write a program, topX - given a number X and an arbitrarily large file that contains
individual numbers on each line (e.g. 500Gb file), will output the largest X numbers,
highest first.
Tell us about the run time/space complexity of it, and whether you think there's room
for improvement in your approach.

Answer:
Given my 'newness' to BigO notation and assessing time/space complexity I am not confident enough to make a definitive comment on the time/space complexity of my solution at the moment but would very much appreciate your thoughts and feedback.

One note for myself to clarify in future is whether duplicate numbers were to be included or disregarded. 

I think there is certainly room for improvement, some quick topline thoughts are:
- nodejs is probably not the ideal language to have written this in. Python or Go is probably better suited.
- A quick sort algorithm may be a more performant solution however when trying to use this method I had memory issues so further investigation of this as a solution is needed.
- With further work I would look to restructure the prepTopXArr function so that the array sorts within this function and, once 'full', is simply appended rather than having the array sort() within the manageTopXArr function in each instance.
- Use the priorityqueue node may provide better performance.
