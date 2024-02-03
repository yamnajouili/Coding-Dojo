<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Create New Ninja</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div>



       <form:form action="/processNinja" method="POST" 
 			modelAttribute="ninja" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md  mb-8"> 
			<form:errors path="*" /> 
			<div> 
			<form:select path="dojo" >
				<c:forEach items="${alldojos }" var="onedojo">
				<option value="${onedojo.id }">
				${onedojo.name }
				</option>
				</c:forEach>
				</form:select>
			</div> 
 			<div> 
 				<form:label path="firstName" class="block text-gray-700 text-sm font-bold mb-2" >First Name:</form:label> 
 				<form:input path="firstName" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div>
            <div> 
 				<form:label path="lastName" class="block text-gray-700 text-sm font-bold mb-2" >Last Name:</form:label> 
 				<form:input path="lastName" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div>
			<div> 
				<form:label path="age" class="block text-gray-700 text-sm font-bold mb-2" >Age:</form:label> 

				<form:input type="text" path="age" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div> 
			
			
			<input type="submit" value="Submit" class="w-full bg-pink-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> 
</div>
</body>
</html>