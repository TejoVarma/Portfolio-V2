import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ''
};

// Email form data interface
export interface EmailFormData {
  user_name: string;
  user_email: string;
  message: string;
}

// Email service class
class EmailService {
  // Send email using EmailJS
  static async sendEmail(formData: EmailFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Validate required fields
      if (!formData.user_name || !formData.user_email || !formData.message) {
        throw new Error('All fields are required');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.user_email)) {
        throw new Error('Please enter a valid email address');
      }

      // Check if EmailJS is properly configured
      if (!this.isConfigured()) {
        throw new Error('EmailJS is not properly configured. Please check your environment variables.');
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          name: formData.user_name,
          email: formData.user_email,
          message: formData.message,
          to_email: 'tejo.varma.alluri@gmail.com' // Your email where you want to receive messages
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      };

    } catch (error) {
      console.error('Failed to send email:', error);

      let errorMessage = 'Failed to send message. Please try again or contact me directly.';

      if (error instanceof Error) {
        // Handle specific error messages
        if (error.message.includes('required')) {
          errorMessage = error.message;
        } else if (error.message.includes('email')) {
          errorMessage = error.message;
        } else if (error.message.includes('configured')) {
          errorMessage = 'Email service is not configured. Please contact me directly.';
        }
      }

      return {
        success: false,
        message: errorMessage
      };
    }
  }

  // Alternative: Send email using form element (useful for more complex templates)
  static async sendEmailWithForm(formElement: HTMLFormElement): Promise<{ success: boolean; message: string }> {
    try {
      if (!formElement) {
        throw new Error('Form element is required');
      }

      // Check if EmailJS is properly configured
      if (!this.isConfigured()) {
        throw new Error('EmailJS is not properly configured. Please check your environment variables.');
      }

      const result = await emailjs.sendForm(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        formElement,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      };

    } catch (error) {
      console.error('Failed to send email:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again or contact me directly.'
      };
    }
  }

  // Validate email configuration
  static isConfigured(): boolean {
    return !!(
      EMAIL_CONFIG.SERVICE_ID &&
      EMAIL_CONFIG.TEMPLATE_ID &&
      EMAIL_CONFIG.PUBLIC_KEY &&
      EMAIL_CONFIG.SERVICE_ID !== '' &&
      EMAIL_CONFIG.TEMPLATE_ID !== '' &&
      EMAIL_CONFIG.PUBLIC_KEY !== ''
    );
  }

  // Get configuration status for debugging
  static getConfigStatus(): { configured: boolean; missing: string[] } {
    const missing: string[] = [];

    if (!EMAIL_CONFIG.SERVICE_ID) {
      missing.push('VITE_EMAILJS_SERVICE_ID');
    }
    if (!EMAIL_CONFIG.TEMPLATE_ID) {
      missing.push('VITE_EMAILJS_TEMPLATE_ID');
    }
    if (!EMAIL_CONFIG.PUBLIC_KEY) {
      missing.push('VITE_EMAILJS_PUBLIC_KEY');
    }

    return {
      configured: missing.length === 0,
      missing
    };
  }

  // Debug method to check current values
  static debugConfig(): void {
    console.log('Email Config Debug:', {
      SERVICE_ID: EMAIL_CONFIG.SERVICE_ID ? '***configured***' : 'missing',
      TEMPLATE_ID: EMAIL_CONFIG.TEMPLATE_ID ? '***configured***' : 'missing',
      PUBLIC_KEY: EMAIL_CONFIG.PUBLIC_KEY ? '***configured***' : 'missing',
      configStatus: this.getConfigStatus()
    });
  }
}

export default EmailService;