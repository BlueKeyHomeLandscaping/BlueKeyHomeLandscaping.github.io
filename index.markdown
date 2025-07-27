---
layout: page
title: Home
permalink: /
---

<!-- Hero Section -->
<section class="hero">
  <div class="hero-content">
    <h1>Transform your space</h1>
    <p>Elevate your landscape with expertise</p>
    <a href="#services" class="cta-button">View services</a>
  </div>
</section>

<!-- About Section -->
<section class="about">
  <div class="container">
    <h2>Your landscaping partner</h2>
    <h3>Transforming spaces with care</h3>
    <p>At Blue Key Home LLC, we specialize in turning your landscape dreams into reality. Located in Grafton, we provide top-notch home services with a focus on landscaping. We are dedicated to enhancing the beauty and functionality of your outdoor spaces. Whether you need maintenance, design, or installation, we bring passion and expertise to every project, ensuring your satisfaction and a vibrant environment for years to come.</p>
  </div>
</section>

<!-- Services Section -->
<section id="services" class="services">
  <div class="container">
    <h2>Landscaping solutions</h2>
    <h3>Transform your outdoor spaces</h3>
    
    <div class="services-grid">
      <div class="service-card">
        <div class="service-image">
          <img src="/assets/images/landscape-design.png" alt="Landscape design">
        </div>
        <h4>Landscape design</h4>
        <p>Transform your outdoor space with innovative landscape design.</p>
      </div>
      
      <div class="service-card">
        <div class="service-image">
          <img src="/assets/images/lawn-care.png" alt="Lawn care">
        </div>
        <h4>Lawn care</h4>
        <p>Keep your lawn healthy and lush year-round.</p>
      </div>
      
      <div class="service-card">
        <div class="service-image">
          <img src="/assets/images/garden-maintenance.png" alt="Garden maintenance">
        </div>
        <h4>Garden maintenance</h4>
        <p>Cultivate beauty with expert garden maintenance services.</p>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="contact">
  <div class="container">
    <h2>Get in touch</h2>
    <p>We're here to help with your landscaping needs!</p>
    
    <form class="contact-form" action="#" method="POST">
      <div class="form-group">
        <label for="name">Name *</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email address *</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="phone">Phone number *</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      
      <div class="form-group">
        <label for="services">Services Interested In *</label>
        <p>Please select at least one option.</p>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" name="services[]" value="lawn-care">
            <span>Lawn Care</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" name="services[]" value="garden-design">
            <span>Garden & Landscaping Design</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" name="services[]" value="mulching">
            <span>Mulching</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" name="services[]" value="fertilization">
            <span>Fertilization</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" name="services[]" value="seasonal-cleanup">
            <span>Seasonal Clean-Up</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" name="services[]" value="pressure-washing">
            <span>Pressure Washing</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" name="services[]" value="other">
            <span>Other</span>
          </label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5"></textarea>
      </div>
      
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</section>
