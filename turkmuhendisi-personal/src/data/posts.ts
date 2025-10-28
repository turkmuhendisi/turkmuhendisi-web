// import postBgImage from "../assets/post-bg.jpg";

export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}

const posts: Post[] = [
  {
    id: "microservices-architecture",
    title: "Microservices Architecture: Best Practices and Implementation",
    description: "A comprehensive guide to designing and implementing microservices architecture with real-world examples and best practices.",
    content: `
      <h2>Introduction to Microservices</h2>
      <p>Microservices architecture has become the go-to solution for building scalable, maintainable applications. This architectural style structures an application as a collection of loosely coupled, independently deployable services.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Scalability:</strong> Each service can be scaled independently based on demand</li>
        <li><strong>Maintainability:</strong> Smaller, focused codebases are easier to maintain</li>
        <li><strong>Technology Diversity:</strong> Different services can use different technologies</li>
        <li><strong>Fault Isolation:</strong> Failures in one service don't bring down the entire system</li>
      </ul>
      
      <h3>Design Principles</h3>
      <p>When designing microservices, consider these key principles:</p>
      <ol>
        <li><strong>Single Responsibility:</strong> Each service should have one clear purpose</li>
        <li><strong>Loose Coupling:</strong> Services should be independent of each other</li>
        <li><strong>High Cohesion:</strong> Related functionality should be grouped together</li>
        <li><strong>API-First Design:</strong> Design APIs before implementing services</li>
      </ol>
      
      <h3>Implementation Strategies</h3>
      <p>Here are some proven strategies for implementing microservices:</p>
      
      <h4>1. Service Discovery</h4>
      <p>Implement a service discovery mechanism to allow services to find each other dynamically. Popular solutions include:</p>
      <ul>
        <li>Consul</li>
        <li>Eureka (Spring Cloud)</li>
        <li>Kubernetes Service Discovery</li>
      </ul>
      
      <h4>2. API Gateway</h4>
      <p>Use an API Gateway to handle cross-cutting concerns like:</p>
      <ul>
        <li>Authentication and Authorization</li>
        <li>Rate Limiting</li>
        <li>Request Routing</li>
        <li>Load Balancing</li>
      </ul>
      
      <h4>3. Data Management</h4>
      <p>Each service should have its own database. Consider:</p>
      <ul>
        <li>Database per Service pattern</li>
        <li>Event-driven data consistency</li>
        <li>Saga pattern for distributed transactions</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>While microservices offer many benefits, they also introduce new challenges:</p>
      
      <h4>Distributed System Complexity</h4>
      <p>Managing a distributed system is inherently more complex than a monolith. Solutions include:</p>
      <ul>
        <li>Centralized logging (ELK Stack)</li>
        <li>Distributed tracing (Jaeger, Zipkin)</li>
        <li>Health checks and monitoring</li>
      </ul>
      
      <h4>Data Consistency</h4>
      <p>Maintaining data consistency across services requires careful design:</p>
      <ul>
        <li>Event sourcing</li>
        <li>CQRS (Command Query Responsibility Segregation)</li>
        <li>Eventual consistency patterns</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Microservices architecture is not a silver bullet, but when implemented correctly, it can provide significant benefits for large, complex applications. The key is to start small, learn from each iteration, and gradually evolve your architecture.</p>
    `,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    category: "Architecture",
    readTime: "8 min read",
    date: "2024-01-15",
    author: "Samet Koca"
  },
  {
    id: "spring-boot-best-practices",
    title: "Spring Boot Best Practices for Production Applications",
    description: "Learn the essential best practices for building robust, scalable Spring Boot applications that are ready for production deployment.",
    content: `
      <h2>Spring Boot Production Readiness</h2>
      <p>Building a Spring Boot application is one thing, but making it production-ready requires careful attention to many aspects. This guide covers the essential best practices that every Spring Boot developer should know.</p>
      
      <h3>1. Configuration Management</h3>
      <p>Proper configuration management is crucial for production applications:</p>
      
      <h4>Environment-Specific Configuration</h4>
      <pre><code># application.yml
spring:
  profiles:
    active: \${SPRING_PROFILES_ACTIVE:dev}
  datasource:
    url: \${DATABASE_URL}
    username: \${DATABASE_USERNAME}
    password: \${DATABASE_PASSWORD}</code></pre>
      
      <h4>External Configuration</h4>
      <ul>
        <li>Use environment variables for sensitive data</li>
        <li>Implement configuration validation</li>
        <li>Use Spring Cloud Config for centralized configuration</li>
      </ul>
      
      <h3>2. Security Best Practices</h3>
      <p>Security should be a top priority in production applications:</p>
      
      <h4>Authentication and Authorization</h4>
      <ul>
        <li>Implement JWT-based authentication</li>
        <li>Use Spring Security with proper role-based access control</li>
        <li>Implement API rate limiting</li>
        <li>Use HTTPS in production</li>
      </ul>
      
      <h4>Data Protection</h4>
      <ul>
        <li>Encrypt sensitive data at rest</li>
        <li>Use secure communication protocols</li>
        <li>Implement proper input validation</li>
        <li>Prevent SQL injection and XSS attacks</li>
      </ul>
      
      <h3>3. Performance Optimization</h3>
      <p>Performance is critical for production applications:</p>
      
      <h4>Database Optimization</h4>
      <ul>
        <li>Use connection pooling (HikariCP)</li>
        <li>Implement proper indexing strategies</li>
        <li>Use JPA/Hibernate efficiently</li>
        <li>Consider caching strategies (Redis, Caffeine)</li>
      </ul>
      
      <h4>Application Performance</h4>
      <ul>
        <li>Enable compression (gzip)</li>
        <li>Use async processing where appropriate</li>
        <li>Implement proper exception handling</li>
        <li>Optimize startup time</li>
      </ul>
      
      <h3>4. Monitoring and Observability</h3>
      <p>Comprehensive monitoring is essential for production applications:</p>
      
      <h4>Health Checks</h4>
      <pre><code>@Component
public class CustomHealthIndicator implements HealthIndicator {
    @Override
    public Health health() {
        // Custom health check logic
        return Health.up().build();
    }
}</code></pre>
      
      <h4>Metrics and Monitoring</h4>
      <ul>
        <li>Use Micrometer for metrics collection</li>
        <li>Integrate with Prometheus and Grafana</li>
        <li>Implement distributed tracing</li>
        <li>Set up proper logging with structured logs</li>
      </ul>
      
      <h3>5. Error Handling</h3>
      <p>Robust error handling is crucial for production stability:</p>
      
      <h4>Global Exception Handler</h4>
      <pre><code>@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception ex) {
        // Log the exception
        log.error("Unexpected error", ex);
        
        // Return appropriate error response
        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(new ErrorResponse("Internal server error"));
    }
}</code></pre>
      
      <h3>6. Testing Strategy</h3>
      <p>A comprehensive testing strategy is essential:</p>
      
      <ul>
        <li><strong>Unit Tests:</strong> Test individual components in isolation</li>
        <li><strong>Integration Tests:</strong> Test component interactions</li>
        <li><strong>End-to-End Tests:</strong> Test complete user workflows</li>
        <li><strong>Performance Tests:</strong> Ensure application meets performance requirements</li>
      </ul>
      
      <h3>7. Deployment and DevOps</h3>
      <p>Proper deployment practices ensure smooth production releases:</p>
      
      <h4>Containerization</h4>
      <ul>
        <li>Use Docker for consistent environments</li>
        <li>Optimize Docker images for size and security</li>
        <li>Use multi-stage builds</li>
      </ul>
      
      <h4>CI/CD Pipeline</h4>
      <ul>
        <li>Automate testing and deployment</li>
        <li>Implement blue-green deployments</li>
        <li>Use feature flags for gradual rollouts</li>
        <li>Monitor deployment success rates</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Building production-ready Spring Boot applications requires attention to many details. By following these best practices, you can create robust, scalable, and maintainable applications that are ready for production deployment.</p>
      
      <p>Remember, production readiness is not a one-time effort but an ongoing process of monitoring, improving, and adapting to changing requirements.</p>
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "Backend",
    readTime: "12 min read",
    date: "2024-01-10",
    author: "Samet Koca"
  },
  {
    id: "react-performance-optimization",
    title: "React Performance Optimization: Advanced Techniques",
    description: "Master advanced React performance optimization techniques including memoization, code splitting, and virtual scrolling.",
    content: `
      <h2>React Performance Optimization</h2>
      <p>Performance is crucial for modern web applications. This guide covers advanced techniques to optimize React applications for better user experience and faster load times.</p>
      
      <h3>1. Component Optimization</h3>
      <p>Optimizing React components is the foundation of performance improvement:</p>
      
      <h4>React.memo for Functional Components</h4>
      <pre><code>const ExpensiveComponent = React.memo(({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});</code></pre>
      
      <h4>useMemo for Expensive Calculations</h4>
      <pre><code>const ExpensiveCalculation = ({ items }) => {
  const processedData = useMemo(() => {
    return items.filter(item => item.active)
                .map(item => ({ ...item, processed: true }));
  }, [items]);
  
  return <div>{/* Render processed data */}</div>;
};</code></pre>
      
      <h4>useCallback for Function Stability</h4>
      <pre><code>const ParentComponent = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return (
    <div>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
};</code></pre>
      
      <h3>2. Code Splitting</h3>
      <p>Code splitting allows you to load only the code needed for the current page:</p>
      
      <h4>Route-Based Code Splitting</h4>
      <pre><code>import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}</code></pre>
      
      <h4>Component-Based Code Splitting</h4>
      <pre><code>const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyComponent() {
  const [showHeavy, setShowHeavy] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowHeavy(true)}>
        Load Heavy Component
      </button>
      {showHeavy && (
        <Suspense fallback={<div>Loading component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}</code></pre>
      
      <h3>3. Virtual Scrolling</h3>
      <p>For large lists, virtual scrolling can dramatically improve performance:</p>
      
      <pre><code>import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
      width="100%"
    >
      {Row}
    </List>
  );
};</code></pre>
      
      <h3>4. Bundle Optimization</h3>
      <p>Optimizing your bundle size is crucial for faster load times:</p>
      
      <h4>Tree Shaking</h4>
      <ul>
        <li>Use ES6 modules for better tree shaking</li>
        <li>Import only what you need from libraries</li>
        <li>Configure webpack for optimal tree shaking</li>
      </ul>
      
      <h4>Library Optimization</h4>
      <ul>
        <li>Use smaller alternatives (date-fns instead of moment.js)</li>
        <li>Implement dynamic imports for heavy libraries</li>
        <li>Use CDNs for common libraries when appropriate</li>
      </ul>
      
      <h3>5. State Management Optimization</h3>
      <p>Efficient state management is key to performance:</p>
      
      <h4>Context Optimization</h4>
      <pre><code>const OptimizedContext = createContext();

const OptimizedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value = useMemo(() => ({
    state,
    dispatch
  }), [state]);
  
  return (
    <OptimizedContext.Provider value={value}>
      {children}
    </OptimizedContext.Provider>
  );
};</code></pre>
      
      <h4>Redux Optimization</h4>
      <ul>
        <li>Use reselect for memoized selectors</li>
        <li>Implement proper action creators</li>
        <li>Use Redux Toolkit for better performance</li>
      </ul>
      
      <h3>6. Rendering Optimization</h3>
      <p>Optimizing the rendering process can significantly improve performance:</p>
      
      <h4>Key Optimization</h4>
      <pre><code>const ListItem = React.memo(({ item, onItemClick }) => {
  return (
    <div onClick={() => onItemClick(item.id)}>
      {item.name}
    </div>
  );
});</code></pre>
      
      <h4>Fragment Usage</h4>
      <pre><code>// Instead of wrapper divs
const Component = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);</code></pre>
      
      <h3>7. Memory Management</h3>
      <p>Proper memory management prevents memory leaks:</p>
      
      <h4>Cleanup in useEffect</h4>
      <pre><code>useEffect(() => {
  const subscription = someService.subscribe();
  
  return () => {
    subscription.unsubscribe();
  };
}, []);</code></pre>
      
      <h4>Event Listener Cleanup</h4>
      <pre><code>useEffect(() => {
  const handleResize = () => {
    // Handle resize
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);</code></pre>
      
      <h3>8. Performance Monitoring</h3>
      <p>Monitoring performance helps identify bottlenecks:</p>
      
      <h4>React DevTools Profiler</h4>
      <ul>
        <li>Use React DevTools Profiler to identify slow components</li>
        <li>Monitor render times and component updates</li>
        <li>Identify unnecessary re-renders</li>
      </ul>
      
      <h4>Performance Metrics</h4>
      <ul>
        <li>Monitor Core Web Vitals</li>
        <li>Track bundle size and load times</li>
        <li>Measure user interaction responsiveness</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>React performance optimization is an ongoing process. Start with the basics like memoization and code splitting, then move to more advanced techniques like virtual scrolling and bundle optimization.</p>
      
      <p>Remember to measure performance before and after optimizations to ensure your changes are actually improving the user experience.</p>
    `,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    category: "Frontend",
    readTime: "10 min read",
    date: "2024-01-05",
    author: "Samet Koca"
  },
  {
    id: "docker-production-deployment",
    title: "Docker for Production: Best Practices and Deployment Strategies",
    description: "Learn how to containerize applications effectively and deploy them to production with Docker best practices.",
    content: `
      <h2>Docker Production Deployment</h2>
      <p>Docker has revolutionized how we deploy applications. This guide covers best practices for containerizing applications and deploying them to production environments.</p>
      
      <h3>1. Dockerfile Best Practices</h3>
      <p>A well-optimized Dockerfile is the foundation of efficient containerization:</p>
      
      <h4>Multi-Stage Builds</h4>
      <pre><code># Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]</code></pre>
      
      <h4>Security Best Practices</h4>
      <ul>
        <li>Use non-root users</li>
        <li>Scan images for vulnerabilities</li>
        <li>Keep base images updated</li>
        <li>Minimize attack surface</li>
      </ul>
      
      <h3>2. Container Orchestration</h3>
      <p>For production deployments, container orchestration is essential:</p>
      
      <h4>Docker Compose for Development</h4>
      <pre><code>version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
    networks:
      - app-network
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - app-network

volumes:
  postgres_data:

networks:
  app-network:
    driver: bridge</code></pre>
      
      <h4>Kubernetes Deployment</h4>
      <pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"</code></pre>
      
      <h3>3. Environment Management</h3>
      <p>Proper environment management is crucial for production deployments:</p>
      
      <h4>Environment Variables</h4>
      <ul>
        <li>Use .env files for different environments</li>
        <li>Never commit secrets to version control</li>
        <li>Use Docker secrets or Kubernetes secrets</li>
        <li>Validate environment variables at startup</li>
      </ul>
      
      <h4>Configuration Management</h4>
      <pre><code># docker-compose.prod.yml
version: '3.8'
services:
  app:
    build: .
    environment:
      - NODE_ENV=production
      - DATABASE_URL=\${DATABASE_URL}
      - REDIS_URL=\${REDIS_URL}
    env_file:
      - .env.production</code></pre>
      
      <h3>4. Monitoring and Logging</h3>
      <p>Comprehensive monitoring is essential for production containers:</p>
      
      <h4>Health Checks</h4>
      <pre><code># In Dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1</code></pre>
      
      <h4>Logging Strategy</h4>
      <ul>
        <li>Use structured logging (JSON format)</li>
        <li>Implement log aggregation (ELK stack)</li>
        <li>Set appropriate log levels</li>
        <li>Rotate logs to prevent disk space issues</li>
      </ul>
      
      <h3>5. Security Considerations</h3>
      <p>Security should be a top priority in production deployments:</p>
      
      <h4>Image Security</h4>
      <ul>
        <li>Scan images for vulnerabilities</li>
        <li>Use minimal base images</li>
        <li>Keep images updated</li>
        <li>Implement image signing</li>
      </ul>
      
      <h4>Runtime Security</h4>
      <ul>
        <li>Run containers as non-root users</li>
        <li>Implement resource limits</li>
        <li>Use read-only filesystems where possible</li>
        <li>Implement network policies</li>
      </ul>
      
      <h3>6. Performance Optimization</h3>
      <p>Optimizing container performance improves resource utilization:</p>
      
      <h4>Resource Management</h4>
      <pre><code># Set resource limits
docker run -d \
  --name myapp \
  --memory=512m \
  --cpus=1.0 \
  myapp:latest</code></pre>
      
      <h4>Image Optimization</h4>
      <ul>
        <li>Use multi-stage builds to reduce image size</li>
        <li>Remove unnecessary files and dependencies</li>
        <li>Use .dockerignore to exclude files</li>
        <li>Optimize layer caching</li>
      </ul>
      
      <h3>7. CI/CD Integration</h3>
      <p>Automating the build and deployment process ensures consistency:</p>
      
      <h4>GitHub Actions Example</h4>
      <pre><code>name: Build and Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Build Docker image
      run: docker build -t myapp:\${{ github.sha }} .
    
    - name: Push to registry
      run: |
        docker tag myapp:\${{ github.sha }} registry/myapp:\${{ github.sha }}
        docker push registry/myapp:\${{ github.sha }}
    
    - name: Deploy to production
      run: |
        kubectl set image deployment/myapp myapp=registry/myapp:\${{ github.sha }}</code></pre>
      
      <h3>8. Backup and Disaster Recovery</h3>
      <p>Having a solid backup and recovery strategy is essential:</p>
      
      <h4>Data Backup</h4>
      <ul>
        <li>Backup persistent volumes regularly</li>
        <li>Test backup restoration procedures</li>
        <li>Store backups in multiple locations</li>
        <li>Document recovery procedures</li>
      </ul>
      
      <h4>Disaster Recovery</h4>
      <ul>
        <li>Have multiple deployment environments</li>
        <li>Implement automated failover</li>
        <li>Test disaster recovery procedures</li>
        <li>Maintain runbooks for common issues</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Docker production deployment requires careful planning and attention to detail. By following these best practices, you can create robust, scalable, and secure containerized applications.</p>
      
      <p>Remember that containerization is not just about packaging applications—it's about creating a consistent, reliable deployment strategy that scales with your business needs.</p>
    `,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop",
    category: "DevOps",
    readTime: "15 min read",
    date: "2023-12-28",
    author: "Samet Koca"
  },
  {
    id: "api-design-principles",
    title: "RESTful API Design: Principles and Best Practices",
    description: "Master the art of designing clean, scalable RESTful APIs that developers love to use and maintain.",
    content: `
      <h2>RESTful API Design Principles</h2>
      <p>Designing a good API is crucial for the success of any application. This guide covers the fundamental principles and best practices for creating RESTful APIs that are intuitive, scalable, and maintainable.</p>
      
      <h3>1. REST Principles</h3>
      <p>REST (Representational State Transfer) is an architectural style for distributed systems:</p>
      
      <h4>Core Principles</h4>
      <ul>
        <li><strong>Stateless:</strong> Each request contains all information needed</li>
        <li><strong>Client-Server:</strong> Separation of concerns</li>
        <li><strong>Cacheable:</strong> Responses can be cached</li>
        <li><strong>Uniform Interface:</strong> Consistent resource manipulation</li>
        <li><strong>Layered System:</strong> Hierarchical architecture</li>
      </ul>
      
      <h3>2. Resource Design</h3>
      <p>Resources are the core of RESTful APIs:</p>
      
      <h4>Naming Conventions</h4>
      <pre><code># Good examples
GET /api/users
GET /api/users/123
POST /api/users
PUT /api/users/123
DELETE /api/users/123

# Nested resources
GET /api/users/123/posts
GET /api/users/123/posts/456</code></pre>
      
      <h4>Resource Hierarchy</h4>
      <ul>
        <li>Use nouns, not verbs</li>
        <li>Keep URLs short and meaningful</li>
        <li>Use plural nouns for collections</li>
        <li>Maintain consistency across endpoints</li>
      </ul>
      
      <h3>3. HTTP Methods</h3>
      <p>Use HTTP methods correctly for different operations:</p>
      
      <h4>CRUD Operations</h4>
      <pre><code># Create
POST /api/users
{
  "name": "John Doe",
  "email": "john@example.com"
}

# Read
GET /api/users
GET /api/users/123

# Update
PUT /api/users/123
PATCH /api/users/123

# Delete
DELETE /api/users/123</code></pre>
      
      <h4>Method Semantics</h4>
      <ul>
        <li><strong>GET:</strong> Retrieve data (idempotent)</li>
        <li><strong>POST:</strong> Create new resources</li>
        <li><strong>PUT:</strong> Replace entire resource</li>
        <li><strong>PATCH:</strong> Partial updates</li>
        <li><strong>DELETE:</strong> Remove resources</li>
      </ul>
      
      <h3>4. Response Design</h3>
      <p>Well-designed responses improve API usability:</p>
      
      <h4>Standard Response Format</h4>
      <pre><code>{
  "success": true,
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "message": "User created successfully"
}</code></pre>
      
      <h4>Error Responses</h4>
      <pre><code>{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": {
      "field": "email",
      "value": null
    }
  }
}</code></pre>
      
      <h3>5. Status Codes</h3>
      <p>Use appropriate HTTP status codes:</p>
      
      <h4>Common Status Codes</h4>
      <ul>
        <li><strong>200 OK:</strong> Successful GET, PUT, PATCH</li>
        <li><strong>201 Created:</strong> Successful POST</li>
        <li><strong>204 No Content:</strong> Successful DELETE</li>
        <li><strong>400 Bad Request:</strong> Invalid request</li>
        <li><strong>401 Unauthorized:</strong> Authentication required</li>
        <li><strong>403 Forbidden:</strong> Insufficient permissions</li>
        <li><strong>404 Not Found:</strong> Resource not found</li>
        <li><strong>500 Internal Server Error:</strong> Server error</li>
      </ul>
      
      <h3>6. Pagination</h3>
      <p>Implement pagination for large datasets:</p>
      
      <h4>Cursor-Based Pagination</h4>
      <pre><code>GET /api/users?limit=20&cursor=eyJpZCI6MTIzfQ

{
  "data": [...],
  "pagination": {
    "next_cursor": "eyJpZCI6MTQzfQ",
    "has_more": true,
    "total": 1000
  }
}</code></pre>
      
      <h4>Offset-Based Pagination</h4>
      <pre><code>GET /api/users?page=2&per_page=20

{
  "data": [...],
  "pagination": {
    "current_page": 2,
    "total_pages": 50,
    "total_count": 1000,
    "per_page": 20
  }
}</code></pre>
      
      <h3>7. Filtering and Sorting</h3>
      <p>Provide flexible querying capabilities:</p>
      
      <h4>Filtering</h4>
      <pre><code># Filter by multiple criteria
GET /api/users?status=active&role=admin&created_after=2023-01-01

# Complex filtering
GET /api/users?filter[status]=active&filter[age][gte]=25&filter[age][lte]=35</code></pre>
      
      <h4>Sorting</h4>
      <pre><code># Single field sorting
GET /api/users?sort=name

# Multiple field sorting
GET /api/users?sort=name,created_at

# Descending order
GET /api/users?sort=-created_at</code></pre>
      
      <h3>8. Versioning</h3>
      <p>API versioning ensures backward compatibility:</p>
      
      <h4>URL Versioning</h4>
      <pre><code>GET /api/v1/users
GET /api/v2/users</code></pre>
      
      <h4>Header Versioning</h4>
      <pre><code>GET /api/users
Accept: application/vnd.api+json;version=1</code></pre>
      
      <h3>9. Security</h3>
      <p>Security is crucial for API design:</p>
      
      <h4>Authentication</h4>
      <ul>
        <li>Use JWT tokens for stateless authentication</li>
        <li>Implement OAuth 2.0 for third-party access</li>
        <li>Use API keys for simple authentication</li>
        <li>Implement rate limiting</li>
      </ul>
      
      <h4>Authorization</h4>
      <ul>
        <li>Implement role-based access control (RBAC)</li>
        <li>Use resource-level permissions</li>
        <li>Validate permissions on each request</li>
        <li>Log access attempts</li>
      </ul>
      
      <h3>10. Documentation</h3>
      <p>Good documentation is essential for API adoption:</p>
      
      <h4>OpenAPI/Swagger</h4>
      <pre><code>openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get all users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserList'</code></pre>
      
      <h4>Documentation Best Practices</h4>
      <ul>
        <li>Provide interactive documentation</li>
        <li>Include code examples</li>
        <li>Document error responses</li>
        <li>Keep documentation updated</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Designing a good RESTful API requires careful consideration of many factors. By following these principles and best practices, you can create APIs that are intuitive, scalable, and maintainable.</p>
      
      <p>Remember that API design is an iterative process. Start with the basics, gather feedback from users, and continuously improve based on real-world usage.</p>
    `,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    category: "Backend",
    readTime: "14 min read",
    date: "2023-12-20",
    author: "Samet Koca"
  }
];

export const getPosts = (): Post[] => {
  return posts;
};

export const getPost = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const searchPosts = (searchTerm: string, category: string): Post[] => {
  let filteredPosts = posts;
  
  if (searchTerm) {
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  if (category && category !== "All") {
    filteredPosts = filteredPosts.filter(post => post.category === category);
  }
  
  return filteredPosts;
};

export const getCategories = (): string[] => {
  const categories = posts.map(post => post.category);
  return ["All", ...Array.from(new Set(categories))];
};

export const getRecentPosts = (limit: number): Post[] => {
  return posts.slice(0, limit);
}; 