var sehri = ["4:51am", "4:50am", "4:49am", "4:48am", "4:47am", "4:46am", "4:45am", "4:44am", "4:43am", "4:42am", "4:41am", "4:40am", "4:39am", "4:38am", "4:37am", "4:36am", "4:35am", "4:34am", "4:33am", "4:32am", "4:31am", "4:30am", "4:29am", "4:28am", "4:28am", "4:27am", "4:26am", "4:25am", "4:24am", "4:24am"]

var iftar = ["6:55pm", "6:55pm", "6:56pm", "6:56pm", "6:57pm", "6:57pm", "6:57pm", "6:58pm", "6:58pm", "6:59pm", "6:59pm", "7:00pm", "7:00pm", "7:01pm", "7:01pm", "7:02pm", "7:02pm", "7:03pm", "7:03pm", "7:04pm", "7:04pm", "7:05pm", "7:05pm", "7:06pm", "7:06pm", "7:07pm", "7:07pm", "7:08pm", "7:08pm", "7:09pm"]

var roza = +prompt("Enter the Ramadan day to see Sehri and Iftar time");

document.getElementById("roza").innerHTML = roza;
document.getElementById("sehr").innerHTML = sehri[roza-1];
document.getElementById("ifftar").innerHTML = iftar[roza-1];







