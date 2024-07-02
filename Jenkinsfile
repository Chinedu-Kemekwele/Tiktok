

pipeline {
agent any 
stages{
stage('Checkout'){
steps{
echo 'fetching code...'
git url: 'https://github.com/Chinedu-Kemekwele/Tiktok.git' ,branch : 'main'
 }
}

stage('Build'){
steps{
echo 'building image using Dockerfile...'
sh 'sudo docker build -t kemszeal/React-app:v1.0.0 .'
 }
}

stage('Test image') {
steps {
echo 'testing image...'
sh 'sudo docker inspect - type=image kemszeal/React-app:v1.0.0'
 }
}

stage('Push'){
steps{
echo 'docker login, image tag and pushing image to registry ...'
sh 'cat ~/my_password.txt | sudo docker login --username --password-stdin'
sh 'sudo docker image tag kemszeal/React-app:v1.0.0 /kemszeal/React-app:latest'
sh 'sudo docker image push kemszeal/React-app:latest'
 }
}

stage('Deploy'){
steps{
echo 'deploying on another server...'
ssh -i /home/vagrant/.ssh/demo.pem ubuntu@ec2-18-188-250-7.us-east-2.compute.amazonaws.com
sh 'cat ~/my_password.txt | sudo docker login --username --password-stdin'
sh 'sudo docker stop My-React-App || true'
sh 'sudo docker rm My-React-App || true'
sh 'sudo docker rmi kemszeal/React-app:latest'
sh 'sudo docker image pull kemszeal/React-app:latest'
sh 'sudo docker run -d --name My-React-App  -p 3000:3000 kemszeal/React-app:latest'
     }
    }
  }
}
