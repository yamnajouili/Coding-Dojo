<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div>

 <form:form action="/edit/${burger.id }" method="POST" 
 			modelAttribute="burger" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"> 
			<form:errors path="*" />
			 <input type="hidden" name="_method" value="put"> 
			<p> 
				<form:label path="brugerName" class="block text-gray-700 text-sm font-bold mb-2" >BurgerName:</form:label> 

				<form:input path="brugerName" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" name="brugerName"/> 
			</p> 
 			<p> 
 				<form:label path="restaurantName" class="block text-gray-700 text-sm font-bold mb-2" >RestaurantName</form:label> 
 				<form:input path="restaurantName" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" name="restaurantName" /> 
			</p>

			<p> 
				<form:label path="rating" class="block text-gray-700 text-sm font-bold mb-2" >Rating</form:label> 

				<form:input type="number" path="rating" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" name="rating"/> 
			</p> 
			
			<p> 
				<form:label path="notes" class="block text-gray-700 text-sm font-bold mb-2" >Notes:</form:label> 

				<form:input type="text" path="notes" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" name="notes"/> 
			</p> 
			<input type="submit" value="Submit" class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> 

</div>

</body>
</html>