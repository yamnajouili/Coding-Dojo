<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
       <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login and resister</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
 <div class="ml-24">
<h1 class="text-3xl font-bold ">Welcome!</h1>
<p class="text-lg">Join our growing community</p></div>
<div class="flex justify-between mt-24">
 <form:form action="/register" method="POST" 
 			modelAttribute="newUser" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md  mb-8"> 
			<form:errors path="*" /> 
			<div> 
				<form:label path="userName" class="block text-gray-700 text-sm font-bold mb-2" >UserName:</form:label> 

				<form:input path="userName" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-700" /> 
			</div> 
 			<div> 
 				<form:label path="email" class="block text-gray-700 text-sm font-bold mb-2" >Email:</form:label> 
 				<form:input path="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-700" /> 
			</div>

			<div> 
				<form:label path="password" class="block text-gray-700 text-sm font-bold mb-2" >password:</form:label> 

				<form:input type="password" path="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-700" step="0.01"/> 
			</div> 
			
			<div> 
				<form:label path="confirm" class="block text-gray-700 text-sm font-bold mb-2" >ConfirmPasswrd:</form:label> 

				<form:input type="password" path="confirm" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-700" step="0.01"/> 
			</div> 
			<input type="submit" value="Submit" class="w-full bg-pink-700  text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> 



 <form:form action="/login" method="POST" 
 			modelAttribute="newLogin" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md  mb-8"> 
			<form:errors path="*" /> 
			<div> 
				<form:label path="email" class="block text-gray-700 text-sm font-bold mb-2" >Email:</form:label> 

				<form:input path="email" class="w-full px-3 py-2 border border-pink-700SSS rounded-md focus:outline-none focus:border-pink-700" /> 
			</div> 
 			<div> 
 				<form:label path="password" class="block text-gray-700 text-sm font-bold mb-2" >Password:</form:label> 
 				<form:input path="password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-700" /> 
			</div>

			
			<input type="submit" value="Login" class="w-full bg-pink-700 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> </div>

</body>
</html>