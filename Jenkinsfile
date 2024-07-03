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
 sh 'docker build . -t kemszeal/react-app:v1.0.0'
   }
  }
  
  stage('Test image') {
steps {
echo 'testing image...'
sh 'docker image inspect kemszeal/react-app:v1.0.0'
   }
  }
  
  stage('Push'){
steps{
script {
    echo 'docker login, image tag and pushing image to registry ...'
                 
		withCredentials([string(credentialsId: 'DOCKER_TOKEN', variable: 'DOCKER_TOKEN')]) {
                sh 'docker login -u kemzeal -p \${DOCKER_TOKEN}'
			    sh 'docker image tag kemszeal/react-app:v1.0.0 kemzeal/react-app:latest'
			    sh 'docker image push kemzeal/react-app:latest'
                 }
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
