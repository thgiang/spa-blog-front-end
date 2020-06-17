export default function (context) {
  if(context.$auth.state.loggedIn) {
    context.$auth.logout().then(r => {
      return;
    })
  }
}
