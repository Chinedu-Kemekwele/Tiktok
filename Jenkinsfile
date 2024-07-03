

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
sh 'docker build -t kemszeal/react-app:v1.0.0 .'
 }
}

stage('Test image') {
steps {
echo 'testing image...'
sh 'docker inspect kemszeal/react-app:v1.0.0'
 }
}

stage('Push'){
steps{
echo 'docker login, image tag and pushing image to registry ...'
 def dockerHubCredentials = credentials('docker-hub-credentials-id')
                    withDockerRegistry(credentialsId: dockerHubCredentials, url: 'https://index.docker.io/v1/') {
			sh 'docker image tag kemszeal/react-app:v1.0.0 /kemszeal/React-app:latest'
			sh 'docker image push kemszeal/react-app:latest'
  }
 }
}

 stage('Login to Docker Hub') {
            steps {
                script {
                    def dockerHubCredentials = credentials('docker-hub-credentials-id')
                    withDockerRegistry(credentialsId: dockerHubCredentials, url: 'https://index.docker.io/v1/') {
                       echo 'deploying on another server...'
			ssh -i /home/vagrant/.ssh/demo.pem ubuntu@ec2-18-188-250-7.us-east-2.compute.amazonaws.com
			sh 'docker container stop my-react-app || true'
			sh 'docker container rm my-react-app || true'
			sh 'docker image rm kemszeal/react-app:latest'
			sh 'docker image pull kemszeal/react-app:latest'
			sh 'docker run -d --name my-react-app  -p 3000:3000 kemszeal/React-app:latest' 
                    }
                }
            }
        }
    }
}
