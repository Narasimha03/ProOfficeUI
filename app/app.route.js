angular.module('office_erp')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider

            .state('main', {
                url: "/",
                views: {
                    '': { templateUrl: "app/components/shared/main.html" },
                    'header@main': { templateUrl: "app/components/shared/header.html"},
                    'sidebar@main': { templateUrl: "app/components/shared/sidebar.html" },
                    'footer@main': { templateUrl: "app/components/shared/footer.html" }
                },
                data: {
                    requireLogin: true
                }
            })
            .state('main.dashboard', { // login Page
                url: "dashboard",
                templateUrl: "app/components/dashboard/dashboard.html",
                controller: "dashboardController",
                data: {
                    requireLogin: true
                }
            })

            .state('main.team', { // login Page
                url: "team",
                templateUrl: "app/components/team/team.html",
                controller: "addTeamController",
                data: {
                    requireLogin: true
                }

            })

            .state('main.client', { // login Page
                url: "client",
                templateUrl: "app/components/client/client.html",
                controller: "addClientController",
                data: {
                    requireLogin: true
                }

            })


            .state('main.project', { // login Page
                url: "project",
                templateUrl: "app/components/project/projects.html",
                controller: "addProjectController",
                data: {
                    requireLogin: true
                }

            })

            .state('main.todolist', { // login Page
                url: "todolist",
                templateUrl: "app/components/todolist/todolist.html",
                controller: "addTodolistController",
                data: {
                    requireLogin: true
                }

            })
            .state('main.task', { // login Page
                url: "task",
                templateUrl: "app/components/task/task.html",
                controller: "addTaskController",
                data: {
                    requireLogin: true
                }

            })

            .state('main.issue', { // login Page
                url: "issue",
                templateUrl: "app/components/issue/issues.html",
                controller: "addIssueController",
                data: {
                    requireLogin: true
                }

            })
            .state('main.discussion', { // login Page
                url: "discussion",
                templateUrl: "app/components/discussion/discussions.html",
                controller: "addDiscussionController",
                data: {
                    requireLogin: true
                }

            })
            .state('main.articles', { // login Page
                url: "articles",
                templateUrl: "app/components/articles/articles.html",
                controller: "addArticleController",
                data: {
                    requireLogin: true
                }

            })
            .state('main.events', { // login Page
                url: "events",
                templateUrl: "app/components/events/events.html",
                controller: "addEventsController",
                data: {
                    requireLogin: true
                }

            })
           


      $urlRouterProvider.otherwise("team");

    })
