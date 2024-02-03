<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="ml-24 mr-24">
<h1>${dojo.name}</h1>
<table class="min-w-full border-collapse block md:table mt-14 ">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">First Name</th>
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Last Name</th>
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Age</th>
			
				
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
		<c:forEach var="one" items="${dojo.dojoninjas}">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${one.firstName}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${one.lastName }</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${one.age}</td>
				
				
			</tr>
			</c:forEach>
			
		</tbody>
	</table>

</div>

</body>
</html>