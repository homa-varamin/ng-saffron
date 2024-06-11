
/* eslint-disable */

import { FuseNavigationItem } from "./navigation.types";

export const defaultNavigation: FuseNavigationItem[] = [
  {
    id: 'dashboards',
    title: 'داشبوردها',
    subtitle: 'طراحی های منحصر به فرد داشبورد',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [
      {
        id: 'dashboards.پروژه',
        title: 'پروژه',
        type: 'basic',
        icon: 'heroicons_outline:clipboard-check',
        link: '/dashboards/project',
      },
      {
        id: 'dashboards.تجزیه و تحلیل',
        title: 'تجزیه و تحلیل',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/dashboards/analytics',
      },
      {
        id: 'dashboards.finance',
        title: 'دارایی',
        type: 'basic',
        icon: 'heroicons_outline:cash',
        link: '/dashboards/finance',
      },
      {
        id: 'dashboards.crypto',
        title: 'رمزنگاری',
        type: 'basic',
        icon: 'heroicons_outline:currency-dollar',
        link: '/dashboards/crypto',
      },
    ],
  },
  {
    id: 'apps',
    title: 'برنامه های کاربردی',
    subtitle: 'طرح های کاربردی سفارشی',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [
      {
        id: 'apps.academy',
        title: 'آکادمی',
        type: 'basic',
        icon: 'heroicons_outline:academic-cap',
        link: '/apps/academy',
      },
      {
        id: 'apps.chat',
        title: 'گفتگو',
        type: 'basic',
        icon: 'heroicons_outline:chat-alt',
        link: '/apps/chat',
      },
      {
        id: 'apps.contacts',
        title: 'مخاطبین',
        type: 'basic',
        icon: 'heroicons_outline:user-group',
        link: '/apps/contacts',
      },
      {
        id: 'apps.ecommerce',
        title: 'تجارت الکترونیک',
        type: 'collapsable',
        icon: 'heroicons_outline:shopping-cart',
        children: [
          {
            id: 'apps.ecommerce.inventory',
            title: 'فهرست',
            type: 'basic',
            link: '/apps/ecommerce/inventory',
          },
        ],
      },
      {
        id: 'apps.file-manager',
        title: 'مدیر فایل',
        type: 'basic',
        icon: 'heroicons_outline:cloud',
        link: '/apps/file-manager',
      },
      {
        id: 'apps.help-center',
        title: 'مرکز کمک',
        type: 'collapsable',
        icon: 'heroicons_outline:support',
        link: '/apps/help-center',
        children: [
          {
            id: 'apps.help-center.home',
            title: 'خانه',
            type: 'basic',
            link: '/apps/help-center',
            exactMatch: true,
          },
          {
            id: 'apps.help-center.faqs',
            title: 'سوالات متداول',
            type: 'basic',
            link: '/apps/help-center/faqs',
          },
          {
            id: 'apps.help-center.guides',
            title: 'راهنماها',
            type: 'basic',
            link: '/apps/help-center/guides',
          },
          {
            id: 'apps.help-center.support',
            title: 'پشتیبانی',
            type: 'basic',
            link: '/apps/help-center/support',
          },
        ],
      },
      {
        id: 'apps.mailbox',
        title: 'صندوق پستی',
        type: 'basic',
        icon: 'heroicons_outline:mail',
        link: '/apps/mailbox',
        badge: {
          title: '27',
          classes: 'px-2 bg-pink-600 text-white rounded-full',
        },
      },
      {
        id: 'apps.notes',
        title: 'یادداشت',
        type: 'basic',
        icon: 'heroicons_outline:pencil-alt',
        link: '/apps/notes',
      },
      {
        id: 'apps.scrumboard',
        title: 'اسکرامبورد',
        type: 'basic',
        icon: 'heroicons_outline:view-boards',
        link: '/apps/scrumboard',
      },
      {
        id: 'apps.tasks',
        title: 'Tasks',
        type: 'basic',
        icon: 'heroicons_outline:check-circle',
        link: '/apps/tasks',
      },
    ],
  },
  {
    id: 'pages',
    title: 'صفحات',
    subtitle: 'طراحی صفحات سفارشی',
    type: 'group',
    icon: 'heroicons_outline:document',
    children: [
      {
        id: 'pages.activities',
        title: 'فعالیت ها',
        type: 'basic',
        icon: 'heroicons_outline:menu-alt-2',
        link: '/pages/activities',
      },
      {
        id: 'pages.authentication',
        title: 'احراز هویت',
        type: 'collapsable',
        icon: 'heroicons_outline:lock-closed',
        children: [
          {
            id: 'pages.authentication.sign-in',
            title: 'ورود',
            type: 'collapsable',
            children: [
              {
                id: 'pages.authentication.sign-in.classic',
                title: 'کلاسیک',
                type: 'basic',
                link: '/pages/authentication/sign-in/classic',
              },
              {
                id: 'pages.authentication.sign-in.modern',
                title: 'مدرن',
                type: 'basic',
                link: '/pages/authentication/sign-in/modern',
              },
              {
                id: 'pages.authentication.sign-in.modern-reversed',
                title: 'معکوس مدرن',
                type: 'basic',
                link: '/pages/authentication/sign-in/modern-reversed',
              },
              {
                id: 'pages.authentication.sign-in.split-screen',
                title: 'تقسیم صفحه',
                type: 'basic',
                link: '/pages/authentication/sign-in/split-screen',
              },
              {
                id: 'pages.authentication.sign-in.split-screen-reversed',
                title: 'تقسیم صفحه نمایش معکوس',
                type: 'basic',
                link: '/pages/authentication/sign-in/split-screen-reversed',
              },
              {
                id: 'pages.authentication.sign-in.fullscreen',
                title: 'تمام صفحه',
                type: 'basic',
                link: '/pages/authentication/sign-in/fullscreen',
              },
              {
                id: 'pages.authentication.sign-in.fullscreen-reversed',
                title: 'تمام صفحه معکوس شده',
                type: 'basic',
                link: '/pages/authentication/sign-in/fullscreen-reversed',
              },
            ],
          },
          {
            id: 'pages.authentication.sign-up',
            title: 'ثبت نام',
            type: 'collapsable',
            link: '/pages/authentication/sign-up',
            children: [
              {
                id: 'pages.authentication.sign-up.classic',
                title: 'کلاسیک',
                type: 'basic',
                link: '/pages/authentication/sign-up/classic',
              },
              {
                id: 'pages.authentication.sign-up.modern',
                title: 'مدرن',
                type: 'basic',
                link: '/pages/authentication/sign-up/modern',
              },
              {
                id: 'pages.authentication.sign-up.modern-reversed',
                title: 'معکوس مدرن',
                type: 'basic',
                link: '/pages/authentication/sign-up/modern-reversed',
              },
              {
                id: 'pages.authentication.sign-up.split-screen',
                title: 'تقسیم صفحه',
                type: 'basic',
                link: '/pages/authentication/sign-up/split-screen',
              },
              {
                id: 'pages.authentication.sign-up.split-screen-reversed',
                title: 'تقسیم صفحه نمایش معکوس',
                type: 'basic',
                link: '/pages/authentication/sign-up/split-screen-reversed',
              },
              {
                id: 'pages.authentication.sign-up.fullscreen',
                title: 'تمام صفحه',
                type: 'basic',
                link: '/pages/authentication/sign-up/fullscreen',
              },
              {
                id: 'pages.authentication.sign-up.fullscreen-reversed',
                title: 'تمام صفحه معکوس شده',
                type: 'basic',
                link: '/pages/authentication/sign-up/fullscreen-reversed',
              },
            ],
          },
          {
            id: 'pages.authentication.sign-out',
            title: 'خروج از سیستم',
            type: 'collapsable',
            link: '/pages/authentication/sign-out',
            children: [
              {
                id: 'pages.authentication.sign-out.classic',
                title: 'کلاسیک',
                type: 'basic',
                link: '/pages/authentication/sign-out/classic',
              },
              {
                id: 'pages.authentication.sign-out.modern',
                title: 'مدرن',
                type: 'basic',
                link: '/pages/authentication/sign-out/modern',
              },
              {
                id: 'pages.authentication.sign-out.modern-reversed',
                title: 'معکوس مدرن',
                type: 'basic',
                link: '/pages/authentication/sign-out/modern-reversed',
              },
              {
                id: 'pages.authentication.sign-out.split-screen',
                title: 'تقسیم صفحه',
                type: 'basic',
                link: '/pages/authentication/sign-out/split-screen',
              },
              {
                id: 'pages.authentication.sign-out.split-screen-reversed',
                title: 'تقسیم صفحه نمایش معکوس',
                type: 'basic',
                link: '/pages/authentication/sign-out/split-screen-reversed',
              },
              {
                id: 'pages.authentication.sign-out.fullscreen',
                title: 'تمام صفحه',
                type: 'basic',
                link: '/pages/authentication/sign-out/fullscreen',
              },
              {
                id: 'pages.authentication.sign-out.fullscreen-reversed',
                title: 'معکوس تمام صفحه',
                type: 'basic',
                link: '/pages/authentication/sign-out/fullscreen-reversed',
              },
            ],
          },
          {
            id: 'pages.authentication.forgot-password',
            title: 'فراموشی رمز عبور',
            type: 'collapsable',
            link: '/pages/authentication/forgot-password',
            children: [
              {
                id: 'pages.authentication.forgot-password.classic',
                title: 'کلاسیک',
                type: 'basic',
                link: '/pages/authentication/forgot-password/classic',
              },
              {
                id: 'pages.authentication.forgot-password.modern',
                title: 'مدرن',
                type: 'basic',
                link: '/pages/authentication/forgot-password/modern',
              },
              {
                id: 'pages.authentication.forgot-password.modern-reversed',
                title: 'معکوس مدرن',
                type: 'basic',
                link: '/pages/authentication/forgot-password/modern-reversed',
              },
              {
                id: 'pages.authentication.forgot-password.split-screen',
                title: 'تقسیم صفحه',
                type: 'basic',
                link: '/pages/authentication/forgot-password/split-screen',
              },
              {
                id: 'pages.authentication.forgot-password.split-screen-reversed',
                title: 'تقسیم صفحه نمایش معکوس',
                type: 'basic',
                link: '/pages/authentication/forgot-password/split-screen-reversed',
              },
              {
                id: 'pages.authentication.forgot-password.fullscreen',
                title: 'تمام صفحه',
                type: 'basic',
                link: '/pages/authentication/forgot-password/fullscreen',
              },
              {
                id: 'pages.authentication.forgot-password.fullscreen-reversed',
                title: 'تمام صفحه معکوس شده',
                type: 'basic',
                link: '/pages/authentication/forgot-password/fullscreen-reversed',
              },
            ],
          },
          {
            id: 'pages.authentication.reset-password',
            title: 'بازنشانی رمز عبور',
            type: 'collapsable',
            link: '/pages/authentication/reset-password',
            children: [
              {
                id: 'pages.authentication.reset-password.classic',
                title: 'کلاسیک',
                type: 'basic',
                link: '/pages/authentication/reset-password/classic',
              },
              {
                id: 'pages.authentication.reset-password.modern',
                title: 'مدرن',
                type: 'basic',
                link: '/pages/authentication/reset-password/modern',
              },
              {
                id: 'pages.authentication.reset-password.modern-reversed',
                title: 'معکوس مدرن',
                type: 'basic',
                link: '/pages/authentication/reset-password/modern-reversed',
              },
              {
                id: 'pages.authentication.reset-password.split-screen',
                title: 'تقسیم صفحه نمایش',
                type: 'basic',
                link: '/pages/authentication/reset-password/split-screen',
              },
              {
                id: 'pages.authentication.reset-password.split-screen-reversed',
                title: 'تقسیم صفحه نمایش معکوس',
                type: 'basic',
                link: '/pages/authentication/reset-password/split-screen-reversed',
              },
              {
                id: 'pages.authentication.reset-password.fullscreen',
                title: 'تمام صفحه',
                type: 'basic',
                link: '/pages/authentication/reset-password/fullscreen',
              },
              {
                id: 'pages.authentication.reset-password.fullscreen-reversed',
                title: 'تمام صفحه معکوس شده',
                type: 'basic',
                link: '/pages/authentication/reset-password/fullscreen-reversed',
              },
            ],
          },
          {
            id: 'pages.authentication.unlock-session',
            title: 'باز کردن قفل',
            type: 'collapsable',
            link: '/pages/authentication/unlock-session',
            children: [
              {
                id: 'pages.authentication.unlock-session.classic',
                title: 'کلاسیک',
                type: 'basic',
                link: '/pages/authentication/unlock-session/classic',
              },
              {
                id: 'pages.authentication.unlock-session.modern',
                title: 'مدرن',
                type: 'basic',
                link: '/pages/authentication/unlock-session/modern',
              },
              {
                id: 'pages.authentication.unlock-session.modern-reversed',
                title: 'معکوس مدرن',
                type: 'basic',
                link: '/pages/authentication/unlock-session/modern-reversed',
              },
              {
                id: 'pages.authentication.unlock-session.split-screen',
                title: 'تقسیم صفحه',
                type: 'basic',
                link: '/pages/authentication/unlock-session/split-screen',
              },
              {
                id: 'pages.authentication.unlock-session.split-screen-reversed',
                title: 'تقسیم صفحه نمایش معکوس',
                type: 'basic',
                link: '/pages/authentication/unlock-session/split-screen-reversed',
              },
              {
                id: 'pages.authentication.unlock-session.fullscreen',
                title: 'تمام صفحه',
                type: 'basic',
                link: '/pages/authentication/unlock-session/fullscreen',
              },
              {
                id: 'pages.authentication.unlock-session.fullscreen-reversed',
                title: 'تمام صفحه معکوس شده',
                type: 'basic',
                link: '/pages/authentication/unlock-session/fullscreen-reversed',
              },
            ],
          },
          {
            id: 'pages.authentication.confirmation-required',
            title: 'نیازمند تایید',
            type: 'collapsable',
            link: '/pages/authentication/confirmation-required',
            children: [
              {
                id: 'pages.authentication.confirmation-required.classic',
                title: 'کلاسیک',
                type: 'basic',
                link: '/pages/authentication/confirmation-required/classic',
              },
              {
                id: 'pages.authentication.confirmation-required.modern',
                title: 'مدرن',
                type: 'basic',
                link: '/pages/authentication/confirmation-required/modern',
              },
              {
                id: 'pages.authentication.confirmation-required.modern-reversed',
                title: 'معکوس مدرن',
                type: 'basic',
                link: '/pages/authentication/confirmation-required/modern-reversed',
              },
              {
                id: 'pages.authentication.confirmation-required.split-screen',
                title: 'تقسیم صفحه',
                type: 'basic',
                link: '/pages/authentication/confirmation-required/split-screen',
              },
              {
                id: 'pages.authentication.confirmation-required.split-screen-reversed',
                title: 'تقسیم صفحه نمایش معکوس',
                type: 'basic',
                link: '/pages/authentication/confirmation-required/split-screen-reversed',
              },
              {
                id: 'pages.authentication.confirmation-required.fullscreen',
                title: 'تمام صفحه',
                type: 'basic',
                link: '/pages/authentication/confirmation-required/fullscreen',
              },
              {
                id: 'pages.authentication.confirmation-required.fullscreen-reversed',
                title: 'تمام صفحه معکوس شده',
                type: 'basic',
                link: '/pages/authentication/confirmation-required/fullscreen-reversed',
              },
            ],
          },
        ],
      },
      {
        id: 'pages.coming-soon',
        title: 'به زودی',
        type: 'collapsable',
        icon: 'heroicons_outline:clock',
        link: '/pages/coming-soon',
        children: [
          {
            id: 'pages.coming-soon.classic',
            title: 'کلاسیک',
            type: 'basic',
            link: '/pages/coming-soon/classic',
          },
          {
            id: 'pages.coming-soon.modern',
            title: 'مدرن',
            type: 'basic',
            link: '/pages/coming-soon/modern',
          },
          {
            id: 'pages.coming-soon.modern-reversed',
            title: 'معکوس مدرن',
            type: 'basic',
            link: '/pages/coming-soon/modern-reversed',
          },
          {
            id: 'pages.coming-soon.split-screen',
            title: 'تقسیم صفحه',
            type: 'basic',
            link: '/pages/coming-soon/split-screen',
          },
          {
            id: 'pages.coming-soon.split-screen-reversed',
            title: 'تقسیم صفحه نمایش معکوس',
            type: 'basic',
            link: '/pages/coming-soon/split-screen-reversed',
          },
          {
            id: 'pages.coming-soon.fullscreen',
            title: 'تمام صفحه',
            type: 'basic',
            link: '/pages/coming-soon/fullscreen',
          },
          {
            id: 'pages.coming-soon.fullscreen-reversed',
            title: 'تمام صفحه معکوس شده',
            type: 'basic',
            link: '/pages/coming-soon/fullscreen-reversed',
          },
        ],
      },
      {
        id: 'pages.error',
        title: 'خطا',
        type: 'collapsable',
        icon: 'heroicons_outline:exclamation-circle',
        children: [
          {
            id: 'pages.error.404',
            title: '404',
            type: 'basic',
            link: '/pages/error/404',
          },
          {
            id: 'pages.error.500',
            title: '500',
            type: 'basic',
            link: '/pages/error/500',
          },
        ],
      },
      {
        id: 'pages.invoice',
        title: 'صورتحساب',
        type: 'collapsable',
        icon: 'heroicons_outline:calculator',
        children: [
          {
            id: 'pages.invoice.printable',
            title: 'قابل چاپ',
            type: 'collapsable',
            children: [
              {
                id: 'pages.invoice.printable.compact',
                title: 'فشرده',
                type: 'basic',
                link: '/pages/invoice/printable/compact',
              },
              {
                id: 'pages.invoice.printable.modern',
                title: 'مدرن',
                type: 'basic',
                link: '/pages/invoice/printable/modern',
              },
            ],
          },
        ],
      },
      {
        id: 'pages.maintenance',
        title: 'نگهداری',
        type: 'basic',
        icon: 'heroicons_outline:exclamation',
        link: '/pages/maintenance',
      },
      {
        id: 'pages.pricing',
        title: 'قیمت گذاری',
        type: 'collapsable',
        icon: 'heroicons_outline:cash',
        children: [
          {
            id: 'pages.pricing.modern',
            title: 'مدرن',
            type: 'basic',
            link: '/pages/pricing/modern',
          },
          {
            id: 'pages.pricing.simple',
            title: 'ساده',
            type: 'basic',
            link: '/pages/pricing/simple',
          },
          {
            id: 'pages.pricing.single',
            title: 'تنها',
            type: 'basic',
            link: '/pages/pricing/single',
          },
          {
            id: 'pages.pricing.table',
            title: 'جدول',
            type: 'basic',
            link: '/pages/pricing/table',
          },
        ],
      },
      {
        id: 'pages.profile',
        title: 'مشخصات',
        type: 'basic',
        icon: 'heroicons_outline:user-circle',
        link: '/pages/profile',
      },
      {
        id: 'pages.settings',
        title: 'تنظیمات',
        type: 'basic',
        icon: 'heroicons_outline:cog',
        link: '/pages/settings',
      },
    ],
  },
  {
    id: 'user-interface',
    title: 'User Interface',
    subtitle: 'Building blocks of the UI & UX',
    type: 'group',
    icon: 'heroicons_outline:collection',
    children: [
      {
        id: 'user-interface.material-components',
        title: 'اجزای مواد',
        type: 'basic',
        icon: 'heroicons_outline:chip',
        link: '/ui/material-components',
      },
      {
        id: 'user-interface.fuse-components',
        title: 'اجزای فیوز',
        type: 'basic',
        icon: 'heroicons_outline:chip',
        link: '/ui/fuse-components',
      },
      {
        id: 'user-interface.other-components',
        title: 'اجزای دیگر',
        type: 'basic',
        icon: 'heroicons_outline:chip',
        link: '/ui/other-components',
      },
      {
        id: 'user-interface.tailwindcss',
        title: 'تیلویند Css کد',
        type: 'basic',
        icon: 'heroicons_outline:sparkles',
        link: '/ui/tailwindcss',
      },
      {
        id: 'user-interface.advanced-search',
        title: 'جستجوی پیشرفته',
        type: 'basic',
        icon: 'heroicons_outline:search-circle',
        link: '/ui/advanced-search',
      },
      {
        id: 'user-interface.animations',
        title: 'تصاویر متحرک',
        type: 'basic',
        icon: 'heroicons_outline:play',
        link: '/ui/animations',
      },
      {
        id: 'user-interface.cards',
        title: 'کارت ها',
        type: 'basic',
        icon: 'heroicons_outline:duplicate',
        link: '/ui/cards',
      },
      {
        id: 'user-interface.colors',
        title: 'رنگ ها',
        type: 'basic',
        icon: 'heroicons_outline:color-swatch',
        link: '/ui/colors',
      },
      {
        id: 'user-interface.confirmation-dialog',
        title: 'گفتگوی تایید',
        type: 'basic',
        icon: 'heroicons_outline:question-mark-circle',
        link: '/ui/confirmation-dialog',
      },
      {
        id: 'user-interface.datatable',
        title: 'جدول داده',
        type: 'basic',
        icon: 'heroicons_outline:view-list',
        link: '/ui/datatable',
      },
      {
        id: 'user-interface.forms',
        title: 'فرم ها',
        type: 'collapsable',
        icon: 'heroicons_outline:pencil-alt',
        children: [
          {
            id: 'user-interface.forms.fields',
            title: 'فیلدها',
            type: 'basic',
            link: '/ui/forms/fields',
          },
          {
            id: 'user-interface.forms.layouts',
            title: 'چیدمان ها',
            type: 'basic',
            link: '/ui/forms/layouts',
          },
          {
            id: 'user-interface.forms.wizards',
            title: 'ویزاردها',
            type: 'basic',
            link: '/ui/forms/wizards',
          },
        ],
      },
      {
        id: 'user-interface.icons',
        title: 'آیکون ها',
        type: 'collapsable',
        icon: 'heroicons_outline:lightning-bolt',
        children: [
          {
            id: 'user-interface.icons.heroicons-outline',
            title: 'طرح کلی',
            type: 'basic',
            link: '/ui/icons/heroicons-outline',
          },
          {
            id: 'user-interface.icons.heroicons-solid',
            title: 'طرح جامد',
            type: 'basic',
            link: '/ui/icons/heroicons-solid',
          },
          {
            id: 'user-interface.icons.material-twotone',
            title: 'مواد 2',
            type: 'basic',
            link: '/ui/icons/material-twotone',
          },
          {
            id: 'user-interface.icons.material-outline',
            title: 'طرح کلی مواد',
            type: 'basic',
            link: '/ui/icons/material-outline',
          },
          {
            id: 'user-interface.icons.material-solid',
            title: 'مواد جامد',
            type: 'basic',
            link: '/ui/icons/material-solid',
          },
          {
            id: 'user-interface.icons.feather',
            title: 'ویژگی',
            type: 'basic',
            link: '/ui/icons/feather',
          },
        ],
      },
      {
        id: 'user-interface.page-layouts',
        title: 'طرح بندی صفحه',
        type: 'collapsable',
        icon: 'heroicons_outline:template',
        children: [
          {
            id: 'user-interface.page-layouts.overview',
            title: 'بررسی اجمالی',
            type: 'basic',
            link: '/ui/page-layouts/overview',
          },
          {
            id: 'user-interface.page-layouts.empty',
            title: 'خالی',
            type: 'basic',
            link: '/ui/page-layouts/empty',
          },
          {
            id: 'user-interface.page-layouts.carded',

            title: 'کارت شده',
            type: 'collapsable',
            children: [
              {
                id: 'user-interface.page-layouts.carded.fullwidth',
                title: 'تمام عرض',
                type: 'basic',
                link: '/ui/page-layouts/carded/fullwidth',
              },
              {
                id: 'user-interface.page-layouts.carded.left-sidebar-1',
                title: 'نوار کناری سمت چپ شماره 1',
                type: 'basic',
                link: '/ui/page-layouts/carded/left-sidebar-1',
              },
              {
                id: 'user-interface.page-layouts.carded.left-sidebar-2',
                title: 'نوار کناری سمت چپ شماره 2',
                type: 'basic',
                link: '/ui/page-layouts/carded/left-sidebar-2',
              },
              {
                id: 'user-interface.page-layouts.carded.right-sidebar-1',
                title: 'نوار کناری سمت راست شماره 1',
                type: 'basic',
                link: '/ui/page-layouts/carded/right-sidebar-1',
              },
              {
                id: 'user-interface.page-layouts.carded.right-sidebar-2',
                title: 'نوار کناری سمت راست شماره 2',
                type: 'basic',
                link: '/ui/page-layouts/carded/right-sidebar-2',
              },
            ],
          },
          {
            id: 'user-interface.page-layouts.simple',
            title: 'ساده',
            type: 'collapsable',
            children: [
              {
                id: 'user-interface.page-layouts.simple.fullwidth-1',
                title: 'عرض کامل شماره 1',
                type: 'basic',
                link: '/ui/page-layouts/simple/fullwidth-1',
              },
              {
                id: 'user-interface.page-layouts.simple.fullwidth-2',
                title: 'عرض کامل شماره 2',
                type: 'basic',
                link: '/ui/page-layouts/simple/fullwidth-2',
              },
              {
                id: 'user-interface.page-layouts.simple.left-sidebar-1',
                title: 'نوار کناری سمت چپ شماره 1',
                type: 'basic',
                link: '/ui/page-layouts/simple/left-sidebar-1',
              },
              {
                id: 'user-interface.page-layouts.simple.left-sidebar-2',
                title: 'نوار کناری سمت چپ شماره 2',
                type: 'basic',
                link: '/ui/page-layouts/simple/left-sidebar-2',
              },
              {
                id: 'user-interface.page-layouts.simple.left-sidebar-3',
                title: 'نوار کناری سمت چپ شماره 3',
                type: 'basic',
                link: '/ui/page-layouts/simple/left-sidebar-3',
              },
              {
                id: 'user-interface.page-layouts.simple.right-sidebar-1',
                title: 'نوار کناری سمت راست شماره 1',
                type: 'basic',
                link: '/ui/page-layouts/simple/right-sidebar-1',
              },
              {
                id: 'user-interface.page-layouts.simple.right-sidebar-2',
                title: 'نوار کناری سمت راست شماره 2',
                type: 'basic',
                link: '/ui/page-layouts/simple/right-sidebar-2',
              },
              {
                id: 'user-interface.page-layouts.simple.right-sidebar-3',
                title: 'نوار کناری سمت راست شماره 3',
                type: 'basic',
                link: '/ui/page-layouts/simple/right-sidebar-3',
              },
            ],
          },
        ],
      },
      {
        id: 'user-interface.typography',
        title: 'تایپوگرافی',
        type: 'basic',
        icon: 'heroicons_outline:pencil',
        link: '/ui/typography',
      },
    ],
  },
  {
    id: 'divider-1',
    type: 'divider',
  },
  {
    id: 'documentation',
    title: 'مستندات',
    subtitle: 'هر آنچه که باید در مورد فیوز بدانید',
    type: 'group',
    icon: 'heroicons_outline:support',
    children: [
      {
        id: 'documentation.changelog',
        title: 'تغییرات',
        type: 'basic',
        icon: 'heroicons_outline:speakerphone',
        link: '/docs/changelog',
        badge: {
          title: '15.2.0',
          classes: 'px-2 bg-yellow-300 text-black rounded-full',
        },
      },
      {
        id: 'documentation.guides',
        title: 'راهنماها',
        type: 'basic',
        icon: 'heroicons_outline:book-open',
        link: '/docs/guides',
      },
    ],
  },
  {
    id: 'divider-2',
    type: 'divider',
  },
  {
    id: 'navigation-features',
    title: 'ویژگی های ناوبری',
    subtitle: 'Collapsable levels & badge styles',
    type: 'group',
    icon: 'heroicons_outline:menu',
    children: [
      {
        id: 'navigation-features.level.0',
        title: 'سطح 0',
        icon: 'heroicons_outline:check-circle',
        type: 'collapsable',
        children: [
          {
            id: 'navigation-features.level.0.1',
            title: 'سطح 1',
            type: 'collapsable',
            children: [
              {
                id: 'navigation-features.level.0.1.2',
                title: 'سطح 2',
                type: 'collapsable',
                children: [
                  {
                    id: 'navigation-features.level.0.1.2.3',
                    title: 'سطح 3',
                    type: 'collapsable',
                    children: [
                      {
                        id: 'navigation-features.level.0.1.2.3.4',
                        title: 'سطح 4',
                        type: 'collapsable',
                        children: [
                          {
                            id: 'navigation-features.level.0.1.2.3.4.5',
                            title: 'سطح 5',
                            type: 'collapsable',
                            children: [
                              {
                                id: 'navigation-features.level.0.1.2.3.4.5.6',
                                title: 'سطح 6',
                                type: 'basic',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'navigation-features.level.0',
        title: 'سطح 0',
        subtitle: 'با زیرنویس',
        icon: 'heroicons_outline:check-circle',
        type: 'collapsable',
        children: [
          {
            id: 'navigation-features.level.0.1-1',
            title: 'سطح 1.1',
            type: 'basic',
          },
          {
            id: 'navigation-features.level.0.1-2',
            title: 'سطح 1.2',
            type: 'basic',
          },
        ],
      },
      {
        id: 'navigation-features.active',
        title: 'آیتم فعال',
        subtitle: 'به صورت دستی به عنوان فعال علامت گذاری شده است',
        icon: 'heroicons_outline:check-circle',
        type: 'basic',
        active: true,
      },
      {
        id: 'navigation-features.disabled-collapsable',
        title: 'غیرفعال تاشو',
        subtitle: 'تعدادی زیرنویس',
        icon: 'heroicons_outline:check-circle',
        type: 'collapsable',
        disabled: true,
        children: [
          {
            id: 'navigation-features.disabled-collapsable.child',
            title: 'شما نباید این قسمت را ببینید',
            type: 'basic',
          },
        ],
      },
      {
        id: 'navigation-features.disabled-basic',
        title: 'غیرفعال پایه',
        subtitle: 'تعدادی زیرنویس',
        icon: 'heroicons_outline:check-circle',
        type: 'basic',
        disabled: true,
      },
      {
        id: 'navigation-features.badge-style-oval',
        title: 'نشان بیضی',
        icon: 'heroicons_outline:tag',
        type: 'basic',
        badge: {
          title: '8',
          classes: 'w-5 h-5 bg-teal-400 text-black rounded-full',
        },
      },
      {
        id: 'navigation-features.badge-style-rectangle',
        title: 'نشان مستطیل',
        icon: 'heroicons_outline:tag',
        type: 'basic',
        badge: {
          title: 'Updated!',
          classes: 'px-2 bg-teal-400 text-black rounded',
        },
      },
      {
        id: 'navigation-features.badge-style-rounded',
        title: 'نشان گرد',
        icon: 'heroicons_outline:tag',
        type: 'basic',
        badge: {
          title: 'NEW',
          classes: 'px-2.5 bg-teal-400 text-black rounded-full',
        },
      },
      {
        id: 'navigation-features.badge-style-simple',
        title: 'نشان ساده',
        icon: 'heroicons_outline:tag',
        type: 'basic',
        badge: {
          title: '87 Unread',
          classes: 'text-teal-500',
        },
      },
      {
        id: 'navigation-features.multi-line',
        title: 'مثال عنوان آیتم پیمایش چند خطی که به خوبی کار می کند',
        icon: 'heroicons_outline:check-circle',
        type: 'basic',
      },
    ],
  },
];
export const compactNavigation: FuseNavigationItem[] = [
  {
    id: 'dashboards',
    title: 'داشبوردها',
    tooltip: 'Dashboards',
    type: 'aside',
    icon: 'heroicons_outline:home',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'apps',
    title: 'برنامه های کاربردی',
    tooltip: 'Apps',
    type: 'aside',
    icon: 'heroicons_outline:qrcode',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'pages',
    title: 'صفحات',
    tooltip: 'Pages',
    type: 'aside',
    icon: 'heroicons_outline:document-duplicate',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'user-interface',
    title: 'رابط کاربری',
    tooltip: 'UI',
    type: 'aside',
    icon: 'heroicons_outline:collection',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'navigation-features',
    title: 'جهت یابی',
    tooltip: 'Navigation',
    type: 'aside',
    icon: 'heroicons_outline:menu',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];
export const futuristicNavigation: FuseNavigationItem[] = [
  {
    id: 'dashboards',
    title: 'داشبوردها',
    type: 'group',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'apps',
    title: 'برنامه های کاربردی',
    type: 'group',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'others',
    title: 'دیگران',
    type: 'group',
  },
  {
    id: 'pages',
    title: 'صفحات',
    type: 'aside',
    icon: 'heroicons_outline:document-duplicate',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'user-interface',
    title: 'رابط کاربری',
    type: 'aside',
    icon: 'heroicons_outline:collection',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'navigation-features',
    title: 'ویژگی های ناوبری',
    type: 'aside',
    icon: 'heroicons_outline:menu',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];
export const horizontalNavigation: FuseNavigationItem[] = [
  {
    id: 'dashboards',
    title: 'داشبوردها',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'apps',
    title: 'برنامه های کاربردی',
    type: 'group',
    icon: 'heroicons_outline:qrcode',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'pages',
    title: 'صفحات',
    type: 'group',
    icon: 'heroicons_outline:document-duplicate',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'user-interface',
    title: 'رابط کاربری',
    type: 'group',
    icon: 'heroicons_outline:collection',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
  {
    id: 'navigation-features',
    title: 'متفرقه',
    type: 'group',
    icon: 'heroicons_outline:menu',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];
