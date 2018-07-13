pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('install') {
      steps {
        sh 'npm i '
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('restart') {
      steps {
        sh 'nginx restart'
      }
    }
  }
}