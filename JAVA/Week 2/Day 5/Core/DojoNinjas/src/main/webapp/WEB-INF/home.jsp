<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Create DoJo</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div>


       <form:form action="/processDojo" method="POST" 
 			modelAttribute="dojo" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md  mb-8"> 
			<form:errors path="*" /> 
			<div> 
				<form:label path="name" class="block text-gray-700 text-sm font-bold mb-2" >Name :</form:label> 

				<form:input path="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div> 
 			
			<input type="submit" value="Create" class="w-full bg-pink-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> 



</div>

</body>
</html>