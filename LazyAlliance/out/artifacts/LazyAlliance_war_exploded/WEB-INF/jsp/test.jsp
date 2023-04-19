
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
%>
<html>
<head>
    <title></title>
</head>

<body>
<a href="<%=basePath%>/message/showallusers">
    <button>按钮</button>
</a>
<h2>${msg}</h2>
</body>

