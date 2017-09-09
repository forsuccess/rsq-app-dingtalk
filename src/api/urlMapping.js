export default {
  //  第三方集成authServer的接口
  'AUTH_TO_RSQID': 'idmap/userid2rsqid',
  'AUTH_TO_USERID': 'idmap/rsqid2userid',

  'AVATAR_CDN': 'https://rishiqing-avatar.oss-cn-beijing.aliyuncs.com/',
  'SYS_AVATAR_CDN': 'https://rishiqing-images.oss-cn-beijing.aliyuncs.com/avatar/',
  'CHECK_AUTH': 'task/login/authAjax',
  'POST_LOGIN': 'task/j_spring_security_check',
  'GET_LOGOUT': 'task/j_spring_security_logout',
  'GET_INBOX_TODOS': 'task/mainTodoList/getInboxTodos',
  'POST_NEW_TODO': 'task/v2/todo',
  'PUT_TODO_PROP': 'task/rsqTodoData/:id',
  'DELETE_TODO': 'task/rsqTodoData/:id',
  'GET_TODO': 'task/rsqTodoData/:id',
  'GET_SCHEDULE_TODOS': 'task/mainTodoList/getPeriodTodos',
  'POST_DATES_HAS_TODO': 'task/v2/todo/getDatesHasTodo',

  'GET_STAFF_LIST': 'task/rsqCommonUser/getAllCompanyUserList',
  'GET_TODO_TITLE': 'task/rsqTodoTitle/getAllTodoTitleList',
  'POST_TODO_COMMENT': 'task/todoComment'
}
