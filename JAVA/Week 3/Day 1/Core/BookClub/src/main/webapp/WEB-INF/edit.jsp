<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
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



<form:form action="/books/${book.id}" method="PUT" 
 			modelAttribute="book" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md  mb-8"> 
			<form:errors path="*" /> 
			<div> 
				<form:label path="title" class="block text-gray-700 text-sm font-bold mb-2" >Title:</form:label> 

				<form:input path="title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-700" /> 
			</div> 
 			<div> 
 				<form:label path="author" class="block text-gray-700 text-sm font-bold mb-2" >Author:</form:label> 
 				<form:input path="author" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-700" /> 
			</div>

			<div> 
				<form:label path="mythoughts" class="block text-gray-700 text-sm font-bold mb-2" > My thoughts:</form:label> 

				<form:textarea  path="mythoughts" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-700" /> 
			</div> 
			
			
			<input type="submit" value="Submit" class="w-full bg-pink-700  text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> 



</div>
</body>
</html>