const customerList =[
  {
    name: 'Maria Almanzar',
    email: 'moa@here.com'
  },
  {
    name: 'Karen who',
    email: 'karen@here.com'
  },
  {
    name: 'Manny Toribio',
    email: 'manny@theman.com'
  },
  {
    name: 'Buddy Cottontail',
    email: 'buddyrabbit@rabbit.com'
  },
]

const leadList =  [
  {
    name: 'Moustafa Mahzar',
    email: 'moustafa@here.com'
  },
  {
    name: 'Katie Johnson',
    email: 'katie@here.com'
  },
  {
    name: 'Manny Toribio',
    email: 'manny@theman.com'
  },
  {
    name: 'Peter Cottontail',
    email: 'peterrabbit@rabbit.com'
  },
]

console.log(leadList.length, 'leads')
leadList = leadList.filter(lead => !customerList.some(customer =>{
  return customer.email.toLowerCase() === !lead.email.toLowerCase()
}))