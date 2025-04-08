/**
 * Tanguria Recreation Club - Notifications System
 * This file manages important event notifications that appear across all pages.
 */

// Store notifications in local storage to persist user preferences
const NOTIFICATIONS_KEY = 'trc_notifications';
const DISMISSED_NOTIFICATIONS_KEY = 'trc_dismissed_notifications';

const sampleNotifications = [
    {
        id: 'annual-meeting-2023',
        title: 'Annual General Meeting',
        message: 'The Annual General Meeting will be held on July 15, 2023 at the Main Hall. All members are requested to attend.',
        type: 'important', // important, info, warning
        link: '#',
        startDate: '2025-04-01',
        endDate: '2025-04-15',
        dismissible: true
    },
    {
        id: 'blood-donation-2023',
        title: 'Blood Donation Camp',
        message: 'Join our Blood Donation Camp on August 5, 2023 at Community Center from 9 AM to 5 PM.',
        type: 'info',
        link: 'donation.html',
        startDate: '2023-07-20',
        endDate: '2023-08-05',
        dismissible: true
    },
    {
        id: 'cultural-event-2023',
        title: 'Annual Cultural Event',
        message: 'Don\'t miss our Annual Cultural Event on September 10, 2023. Book your tickets now!',
        type: 'warning',
        link: '#',
        startDate: '2023-08-10',
        endDate: '2023-09-10',
        dismissible: true
    }
];

// Function to get active notifications
function getActiveNotifications() {
    // Get today's date
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    // Filter notifications that are active based on date range
    return sampleNotifications.filter(notification => {
        return notification.startDate <= todayString && notification.endDate >= todayString;
    });
}

// Function to get dismissed notifications from local storage
function getDismissedNotifications() {
    const dismissed = localStorage.getItem(DISMISSED_NOTIFICATIONS_KEY);
    return dismissed ? JSON.parse(dismissed) : [];
}

// Function to dismiss a notification
function dismissNotification(notificationId) {
    const dismissed = getDismissedNotifications();
    if (!dismissed.includes(notificationId)) {
        dismissed.push(notificationId);
        localStorage.setItem(DISMISSED_NOTIFICATIONS_KEY, JSON.stringify(dismissed));
    }

    // Remove the notification from the DOM
    const notificationElement = document.getElementById(`notification-${notificationId}`);
    if (notificationElement) {
        notificationElement.remove();
    }

    // Check if there are any notifications left
    const notificationsContainer = document.querySelector('.notifications-container');
    if (notificationsContainer && notificationsContainer.querySelectorAll('.notification').length === 0) {
        notificationsContainer.classList.add('hidden');
    }
}

// Function to render notifications
function renderNotifications() {
    const activeNotifications = getActiveNotifications();
    const dismissedNotifications = getDismissedNotifications();

    // Filter out dismissed notifications
    const notificationsToShow = activeNotifications.filter(notification =>
        !dismissedNotifications.includes(notification.id)
    );

    if (notificationsToShow.length === 0) {
        return; // No notifications to show
    }

    // Create or get the notifications container
    let notificationsContainer = document.querySelector('.notifications-container');

    if (!notificationsContainer) {
        notificationsContainer = document.createElement('div');
        notificationsContainer.className = 'notifications-container';

        // Insert after header
        const header = document.querySelector('.site-header');
        if (header && header.nextSibling) {
            header.parentNode.insertBefore(notificationsContainer, header.nextSibling);
        } else {
            document.body.insertBefore(notificationsContainer, document.body.firstChild);
        }
    }

    // Clear existing notifications
    notificationsContainer.innerHTML = '';

    // Add each notification
    notificationsToShow.forEach(notification => {
        const notificationElement = document.createElement('div');
        notificationElement.className = `notification notification-${notification.type}`;
        notificationElement.id = `notification-${notification.id}`;

        const contentHTML = `
            <div class="notification-content">
                <h4 class="notification-title">${notification.title}</h4>
                <p class="notification-message">${notification.message}</p>
                ${notification.link ? `<a href="${notification.link}" class="notification-link">Learn More</a>` : ''}
            </div>
        `;

        notificationElement.innerHTML = contentHTML;

        // Add dismiss button if notification is dismissible
        if (notification.dismissible) {
            const dismissButton = document.createElement('button');
            dismissButton.className = 'notification-dismiss';
            dismissButton.setAttribute('aria-label', 'Dismiss notification');
            dismissButton.innerHTML = '&times;';
            dismissButton.addEventListener('click', () => dismissNotification(notification.id));
            notificationElement.appendChild(dismissButton);
        }

        notificationsContainer.appendChild(notificationElement);
    });

    // Show the container
    notificationsContainer.classList.remove('hidden');
}

// Initialize notifications when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderNotifications();
});
