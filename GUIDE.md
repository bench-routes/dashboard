# Guide to using the Bench Routes Dashboard

After you have setup your Bench Routes Dashboard you will see the following webpage on http://localhost:3000/

![Screenshot from 2021-08-09 08-33-37](https://user-images.githubusercontent.com/56596436/128656917-0c750203-1989-4874-a4e1-aec0780a93d9.png)


## Selecting the machine

To select the machine you need to click on the selector on the top left corner of the screen as shown in the image.

![Screenshot from 2021-08-09 08-46-20](https://user-images.githubusercontent.com/56596436/128657116-2f7fcb39-fc26-469a-8a3c-107fe4616a52.png)


Incase the backend throw some error or is not running you will see a error message as shown below.

![Screenshot from 2021-08-09 08-46-39](https://user-images.githubusercontent.com/56596436/128657126-44edd227-cdbd-4ae0-9a42-5b42fd8dcd29.png)


## Selecting the Route

To select the route you need to select on any item present in the list on the bottom left corner of the screen as shown in the image.

![list](https://user-images.githubusercontent.com/56596436/128657425-2bffb982-0435-4ad5-b0d0-b7ca41194f5d.gif)


Incase the backend throw some error or is not running you will see a error message as shown below.

![Screenshot from 2021-08-09 08-56-41](https://user-images.githubusercontent.com/56596436/128657571-7f61af26-5bc6-4b42-844d-a77b384641c7.png)


## Searching the Route

You can search the route from the list of routes using the search box above the list.

![search](https://user-images.githubusercontent.com/56596436/128657797-841ea520-88e6-43f1-bd7e-44ff7c70551a.gif)


## Using Time Querier

You can set the start time, end time and step value using the time querier component on the sidebar and then click "Fetch" to query the data.

![time-query](https://user-images.githubusercontent.com/56596436/128658284-6799341e-a391-4653-8743-9b7a84282ef4.gif)


Incase the endtime is less than the start time on clicking "Fetch" you will see a error as show below.

![Screenshot from 2021-08-09 09-16-30](https://user-images.githubusercontent.com/56596436/128658438-ed91d758-9326-4e7e-af67-4fb11fb5c629.png)


## Graph plots and error messages

Whenever a route is selected or the "Fetch" button is used for querying a route for different time intervals a graph corresponding to the qeried data will be displayed.

![route-selector](https://user-images.githubusercontent.com/56596436/128658613-449b11ef-ae11-415b-ac37-fe848f4d9bb3.gif)

![query-time](https://user-images.githubusercontent.com/56596436/128658635-e43a4ec8-27f4-4b91-84ea-8fe7ee20e82f.gif)


Incase the backend throws some error you will see the following error.

![Screenshot from 2021-08-08 00-42-09](https://user-images.githubusercontent.com/56596436/128659241-190b6a69-ec79-44e1-9bfb-da1b5ef928a1.png)


Incase there is no data currently for the selected route and time interval you will see the following image.

![Screenshot from 2021-08-08 00-40-17](https://user-images.githubusercontent.com/56596436/128659820-fbb712be-a3f4-49fe-913a-324ce608ca4a.png)


Incase the amount of queried data is above the threshold value then the following message will be displayed.(To get rid of this error make sure to increase the step value)

![Screenshot from 2021-08-09 10-15-31](https://user-images.githubusercontent.com/56596436/128661438-d31dc0f8-13bd-4c1e-8f52-013161539c0e.png)
