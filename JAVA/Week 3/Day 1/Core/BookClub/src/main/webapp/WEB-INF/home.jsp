<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Read Share</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="flex justify-between items-center mr-32 ml-32 mt-20">
<h1 class="text-3xl font-bold ">Welcome , ${user.userName }</h1>



<a href="/logout" class=" bg-green-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300 ">Logout</a></div>
<div class="flex justify-between items-center mr-32 ml-32 mt-5">

<p class="text-lg">Books from everyone's shelves: </p>
<a href="/books/new" class=" bg-green-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300 ">+Add a to my shelf</a>
</div>
<div class="mt-5 mr-32 ml-32">

<table class="min-w-full border-collapse block md:table ">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ID</th>
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Title</th>
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Author Name</th>
			
				<th class="bg-pink-900   p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Posted By</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
		<c:forEach var="onebook" items="${allbooks }">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${onebook.id }</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><a href="books/${onebook.id}" class="underline underline-offset-1 text-cyan-400">${onebook.title }</a></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${onebook.author}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${onebook.user.userName}</td>
				
				
			</tr>
			</c:forEach>
			
		</tbody>
	</table>



</div>
</body>
</html>