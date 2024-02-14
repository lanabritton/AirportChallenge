# Task 1 and User Stories

The Business Analyst team working with the client has identified the following features that should be implemented:

A representation of the airport is needed in the software that defines the maximum capacity of the number of planes that can be at the airport at any one time.

This capacity should have the ability to be overridden as appropriate.

Air Traffic Controllers need to be able to:
Instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport
Instruct a plane to take off from an airport as long as it is currently at the airport

#  Explain the benefits of the software to the client - why they need it and how it will help them. You should include:

- The problem that the software is solving
- The benefits that the software will bring to the client
- The risks associated with the software

---

# The problem that the software is solving

This software has been developed to help manage the flow of planes. Airports are notorious for being busy they are a place where planes land and take off. If there is not a good management system in place this can lead to various issues including, delays and safety. These issues are bad for business as it can lead to unsatisfactory customer service which can be detrimental to a business. 
This software aims to reduce these issues. 

#  The benefits that the software will bring to the client

The benefits that this piece of software will bring to the business are: 

- **Improved Efficiency:** The software helps manage the flow of planes, reducing delays, and improving the overall efficiency of airport operations.

- **Enhanced Safety:** By managing the flow of planes effectively, the software contributes to safer operations, reducing the risk of accidents and incidents.

- **Reduced Congestion:**  This software helps to prevent congestion by coordinating plane movements.

- **Scalability:** The software has the option to override the maximum capacity of planes, therefore, it is a benefit that it can be adapted to the varying needs of the business. 

- **Resource Management:** The software has been designed to ensure that airport resources can be allocated elsewhere. For example; more staff can be deployed to other areas of the business as needed. 

#  The risks associated with the software

- **Bugs and Errors:** There is a potential risk for bugs and errors, this could cause airport disruption, it needs regular maintenance. 

- **Security:** It is essential that security is a top priority. Any breaches of data could compromise airport safety and operations. 

- **Updates and Maintenance:** It is essential that the software has regular updates and regular maintenance. This ensures everything is functioning correctly. 

- **Training and Adopting to Change:** All staff using the software must be trained, staff may also be resistant to adopt a new system. Failure to training and wanting to adopt to the new system may pose business challenges.

- **Costs:** Developing, implementing and maintaining the software will be costly. However, this should be looked at against the benefits. 

- 

# User Stories 

User Story 1
- As an air traffic controller, I want to prevent airplanes from landing when my airport is full.

User Story 2
- As an air traffic controller, I would like the ability to override the maximum capacity for the number of planes at the airport as needed.

User Story 3
- As an Air Traffic Controller, I want to know the current number of planes at the airport.

User Story 4
- As an Air Traffic Controller, I want to be able to get the current number of planes at the airport and also know which planes have landed.

User Story 5
- As an Air Traffic Controller, I want to have visibility into the current planes at the airport and their respective IDs.

User Story 6
- As an Air Traffic Controller, I want the ability to simulate stormy weather conditions, which should prevent planes from landing or taking off.

-----------------------------

**User Story 7 - AI Generated**

-- Everything was generated using ChatGPT -- 

I have kept this as User Story 7 as I realized I had missed some tests after asking a Q in a session today.

- As an Air Traffic Controller, I want to ensure that planes cannot land or take off in stormy weather conditions.

--------------------------------------------------------------
| Objects             | Properties           | Messages        | Outputs |
--------------------------------------------------------------
| Air Traffic         |                      |                 |         |
| Controller          |                      |                 |         |
|---------------------|----------------------|-----------------|---------|
| Airport             | maxCapacity @Int     | canLand()       | 'True' or 'false' |
|                     | currentCapacity @Int | canTakeOff()    | 'True' or 'false' |
|                     | landedPlanes @Object | setStormyWeather() | 'True' or 'false' |
|---------------------|----------------------|-----------------|---------|
| Plane               | planeId @Int         |                 |         |
|                     | isFlying @Boolean    |                 |         |
|---------------------|----------------------|-----------------|---------|
| Weather             | isStormy @Boolean    |                 |         |
|---------------------|----------------------|-----------------|---------|

![Alt Text](AIPrompt1.png)

I then asked it to write me a test for it, by putting in what was asked. 

I added the first test and then when I completed the AI Generated section it gave me more tests and these are in spec/weather.spec.js.

-----------------------------

The below were added after due to realizing these had not been thought about when developing the user stories. 

-----------------------------

User Story 8 

- As an Air Traffic Controller, I want to have the ability to remove a plane from the airport when necessary. 

User Story 9

- As an Air Traffic Controller, I want to prevent a plane that is already at the airport from landing again. 

User Story 10

- As an Air Traffic Controller, I want to ensure that I cannot instruct a plane to take off if it is not currently at the airport.

**AI Generated User Stories from CHATGPT**

User Story 12

- As an Air Traffic Controller, I want to ensure that planes cannot land in stormy weather conditions, ensuring the safety of flights.

User Story 13

- As an Air Traffic Controller, I want to prevent planes from taking off in stormy weather conditions to minimize potential risks and ensure safe departures.

User Story 14

- As an Air Traffic Controller, I want planes to have the ability to take off smoothly in clear weather conditions to maintain efficient operations and minimize delays.










