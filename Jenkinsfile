pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                    } else {
                        bat 'npm ci'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker build -t devops-deployment-platform:latest .'
                    } else {
                        bat 'docker build -t devops-deployment-platform:latest .'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            docker stop devops-deployment-platform || true
                            docker rm devops-deployment-platform || true
                            docker run -d \
                                --name devops-deployment-platform \
                                --restart unless-stopped \
                                -p 3000:3000 \
                                devops-deployment-platform:latest
                        '''
                    } else {
                        bat '''
                            docker stop devops-deployment-platform || exit /b 0
                            docker rm devops-deployment-platform || exit /b 0
                            docker run -d --name devops-deployment-platform --restart unless-stopped -p 3000:3000 devops-deployment-platform:latest
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD pipeline failed.'
        }
    }
}