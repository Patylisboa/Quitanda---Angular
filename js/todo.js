    angular.module('todoApp', [])
      .controller('TodoListController', function() {
        let todoList = this;
        // todoList.todos = [
        //   {text:'learn AngularJS', done:true},
        //   {text:'build an AngularJS app', done:false}];
     
        // todoList.addTodo = function() {
        //   todoList.todos.push({text:todoList.todoText, done:false});
        //   todoList.todoText = '';
        // };
     
        // todoList.remaining = function() {
        //   let count = 0;
        //   angular.forEach(todoList.todos, function(todo) {
        //     count += todo.done ? 0 : 1;
        //   });
        //   return count;
        // };
     
        // todoList.archive = function() {
        //   let oldTodos = todoList.todos;
        //   todoList.todos = [];
        //   angular.forEach(oldTodos, function(todo) {
        //     if (!todo.done) todoList.todos.push(todo);
        //   });
        // };
        todoList.minhaVariavel = "Patricia";
        todoList.meuArray = [
          {produto: 'mouse'  ,qtd: '2'},
          {produto: 'teclado', qtd: '3'},
          {produto: 'pendrive',qtd: '4'} 
        ]
        todoList.verificaPar = function(valor){
          let retorno = false;
          if(valor %2 == 0){
            retorno = true;
          }
        return retorno;              
        }
      });

