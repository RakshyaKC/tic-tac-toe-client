curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=mb@mb.com" \
  --data-urlencode "credentials[password]=m"

echo
