export function guest (request, response, next) {
  if (!request.isAuthenticated()) return next()
  response.redirect('/')
}

export function secure (request, response, next) {
  if (request.isAuthenticated()) return next()
  response.redirect('/login')
}
