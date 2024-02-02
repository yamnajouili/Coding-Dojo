<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Burgers</title>

<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="pl-24 pr-24 mt-24">

<table class="min-w-full border-collapse block md:table ">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Burger Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Restaurants Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Rating</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Notes</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
		<c:forEach var="oneburger" items="${allBurgers}">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneburger.brugerName }</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneburger.restaurantName }</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneburger.rating }</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneburger.notes }</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					
					<a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded" href="/edit/${oneburger.id }">Edit</a>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			</c:forEach>
			
		</tbody>
	</table></div>
	<div class="mt-32">
	
<!--     ================================ -->

       <form:form action="/processBurger" method="POST" 
 			modelAttribute="burger" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"> 
			<form:errors path="*" /> 
			<div> 
				<form:label path="brugerName" class="block text-gray-700 text-sm font-bold mb-2" >BurgerName:</form:label> 

				<form:input path="brugerName" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div> 
 			<div> 
 				<form:label path="restaurantName" class="block text-gray-700 text-sm font-bold mb-2" >RestaurantName</form:label> 
 				<form:input path="restaurantName" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div>

			<div> 
				<form:label path="rating" class="block text-gray-700 text-sm font-bold mb-2" >Rating</form:label> 

				<form:input type="number" path="rating" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div> 
			
			<div> 
				<form:label path="notes" class="block text-gray-700 text-sm font-bold mb-2" >Notes:</form:label> 

				<form:textarea  path="notes" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" ></form:textarea> 
			</div> 
			<input type="submit" value="Submit" class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> 
	</div>
</body>
</html>