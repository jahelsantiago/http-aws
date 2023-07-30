yum update -y

#install NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
#activate NVM
. ~/.nvm/nvm.sh
#install node
nvm install 16
#install git
sudo yum install -y git
git clone https://github.com/jahelsantiago/http-aws.git

cd http-aws
node index.js


npm install -g pm2
pm2 start app.js
pm2 save