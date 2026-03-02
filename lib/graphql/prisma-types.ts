/* eslint-disable */
import type { Prisma, Tenant, User, Profile, Role, Permission, ProfilePermission, RolePermission, UserPermission, UserRole, CourseCategory, Course, CourseSection, Lesson, Enrollment, LessonProgress, Quiz, QuizQuestion, QuizAnswer, QuizAttempt, Assignment, AssignmentSubmission, Submission, Grade, DiscussionThread, DiscussionPost, Announcement, CertificateTemplate, Certificate, File, LessonResource, Tag, CourseTag, Author, BlogPost, Webhook, ApiToken, Notification, AuditLog, AuditLogChange, AuthLog, UserActivity } from "D:\\NextJS\\lms-platform\\node_modules\\@prisma\\client/index.js";
import type { PothosPrismaDatamodel } from "@pothos/plugin-prisma";
export default interface PrismaTypes {
    Tenant: {
        Name: "Tenant";
        Shape: Tenant;
        Include: Prisma.TenantInclude;
        Select: Prisma.TenantSelect;
        OrderBy: Prisma.TenantOrderByWithRelationInput;
        WhereUnique: Prisma.TenantWhereUniqueInput;
        Where: Prisma.TenantWhereInput;
        Create: {};
        Update: {};
        RelationName: "users" | "profiles" | "roles" | "courses" | "courseCategories" | "auditLogs" | "certificateTemplates";
        ListRelations: "users" | "profiles" | "roles" | "courses" | "courseCategories" | "auditLogs" | "certificateTemplates";
        Relations: {
            users: {
                Shape: User[];
                Name: "User";
                Nullable: false;
            };
            profiles: {
                Shape: Profile[];
                Name: "Profile";
                Nullable: false;
            };
            roles: {
                Shape: Role[];
                Name: "Role";
                Nullable: false;
            };
            courses: {
                Shape: Course[];
                Name: "Course";
                Nullable: false;
            };
            courseCategories: {
                Shape: CourseCategory[];
                Name: "CourseCategory";
                Nullable: false;
            };
            auditLogs: {
                Shape: AuditLog[];
                Name: "AuditLog";
                Nullable: false;
            };
            certificateTemplates: {
                Shape: CertificateTemplate[];
                Name: "CertificateTemplate";
                Nullable: false;
            };
        };
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "tenant" | "profile" | "roles" | "userPermissions" | "enrollments" | "lessonProgresses" | "quizAttempts" | "assignmentSubmissions" | "submissions" | "discussionPosts" | "certificates" | "webhooks" | "apiTokens" | "notifications" | "auditLogs" | "authLogs" | "userActivities";
        ListRelations: "roles" | "userPermissions" | "enrollments" | "lessonProgresses" | "quizAttempts" | "assignmentSubmissions" | "submissions" | "discussionPosts" | "certificates" | "webhooks" | "apiTokens" | "notifications" | "auditLogs" | "authLogs" | "userActivities";
        Relations: {
            tenant: {
                Shape: Tenant;
                Name: "Tenant";
                Nullable: false;
            };
            profile: {
                Shape: Profile;
                Name: "Profile";
                Nullable: false;
            };
            roles: {
                Shape: UserRole[];
                Name: "UserRole";
                Nullable: false;
            };
            userPermissions: {
                Shape: UserPermission[];
                Name: "UserPermission";
                Nullable: false;
            };
            enrollments: {
                Shape: Enrollment[];
                Name: "Enrollment";
                Nullable: false;
            };
            lessonProgresses: {
                Shape: LessonProgress[];
                Name: "LessonProgress";
                Nullable: false;
            };
            quizAttempts: {
                Shape: QuizAttempt[];
                Name: "QuizAttempt";
                Nullable: false;
            };
            assignmentSubmissions: {
                Shape: AssignmentSubmission[];
                Name: "AssignmentSubmission";
                Nullable: false;
            };
            submissions: {
                Shape: Submission[];
                Name: "Submission";
                Nullable: false;
            };
            discussionPosts: {
                Shape: DiscussionPost[];
                Name: "DiscussionPost";
                Nullable: false;
            };
            certificates: {
                Shape: Certificate[];
                Name: "Certificate";
                Nullable: false;
            };
            webhooks: {
                Shape: Webhook[];
                Name: "Webhook";
                Nullable: false;
            };
            apiTokens: {
                Shape: ApiToken[];
                Name: "ApiToken";
                Nullable: false;
            };
            notifications: {
                Shape: Notification[];
                Name: "Notification";
                Nullable: false;
            };
            auditLogs: {
                Shape: AuditLog[];
                Name: "AuditLog";
                Nullable: false;
            };
            authLogs: {
                Shape: AuthLog[];
                Name: "AuthLog";
                Nullable: false;
            };
            userActivities: {
                Shape: UserActivity[];
                Name: "UserActivity";
                Nullable: false;
            };
        };
    };
    Profile: {
        Name: "Profile";
        Shape: Profile;
        Include: Prisma.ProfileInclude;
        Select: Prisma.ProfileSelect;
        OrderBy: Prisma.ProfileOrderByWithRelationInput;
        WhereUnique: Prisma.ProfileWhereUniqueInput;
        Where: Prisma.ProfileWhereInput;
        Create: {};
        Update: {};
        RelationName: "tenant" | "users" | "profilePermissions";
        ListRelations: "users" | "profilePermissions";
        Relations: {
            tenant: {
                Shape: Tenant;
                Name: "Tenant";
                Nullable: false;
            };
            users: {
                Shape: User[];
                Name: "User";
                Nullable: false;
            };
            profilePermissions: {
                Shape: ProfilePermission[];
                Name: "ProfilePermission";
                Nullable: false;
            };
        };
    };
    Role: {
        Name: "Role";
        Shape: Role;
        Include: Prisma.RoleInclude;
        Select: Prisma.RoleSelect;
        OrderBy: Prisma.RoleOrderByWithRelationInput;
        WhereUnique: Prisma.RoleWhereUniqueInput;
        Where: Prisma.RoleWhereInput;
        Create: {};
        Update: {};
        RelationName: "tenant" | "users" | "rolePermissions";
        ListRelations: "users" | "rolePermissions";
        Relations: {
            tenant: {
                Shape: Tenant;
                Name: "Tenant";
                Nullable: false;
            };
            users: {
                Shape: UserRole[];
                Name: "UserRole";
                Nullable: false;
            };
            rolePermissions: {
                Shape: RolePermission[];
                Name: "RolePermission";
                Nullable: false;
            };
        };
    };
    Permission: {
        Name: "Permission";
        Shape: Permission;
        Include: Prisma.PermissionInclude;
        Select: Prisma.PermissionSelect;
        OrderBy: Prisma.PermissionOrderByWithRelationInput;
        WhereUnique: Prisma.PermissionWhereUniqueInput;
        Where: Prisma.PermissionWhereInput;
        Create: {};
        Update: {};
        RelationName: "profilePermissions" | "rolePermissions" | "userPermissions";
        ListRelations: "profilePermissions" | "rolePermissions" | "userPermissions";
        Relations: {
            profilePermissions: {
                Shape: ProfilePermission[];
                Name: "ProfilePermission";
                Nullable: false;
            };
            rolePermissions: {
                Shape: RolePermission[];
                Name: "RolePermission";
                Nullable: false;
            };
            userPermissions: {
                Shape: UserPermission[];
                Name: "UserPermission";
                Nullable: false;
            };
        };
    };
    ProfilePermission: {
        Name: "ProfilePermission";
        Shape: ProfilePermission;
        Include: Prisma.ProfilePermissionInclude;
        Select: Prisma.ProfilePermissionSelect;
        OrderBy: Prisma.ProfilePermissionOrderByWithRelationInput;
        WhereUnique: Prisma.ProfilePermissionWhereUniqueInput;
        Where: Prisma.ProfilePermissionWhereInput;
        Create: {};
        Update: {};
        RelationName: "profile" | "permission";
        ListRelations: never;
        Relations: {
            profile: {
                Shape: Profile;
                Name: "Profile";
                Nullable: false;
            };
            permission: {
                Shape: Permission;
                Name: "Permission";
                Nullable: false;
            };
        };
    };
    RolePermission: {
        Name: "RolePermission";
        Shape: RolePermission;
        Include: Prisma.RolePermissionInclude;
        Select: Prisma.RolePermissionSelect;
        OrderBy: Prisma.RolePermissionOrderByWithRelationInput;
        WhereUnique: Prisma.RolePermissionWhereUniqueInput;
        Where: Prisma.RolePermissionWhereInput;
        Create: {};
        Update: {};
        RelationName: "role" | "permission";
        ListRelations: never;
        Relations: {
            role: {
                Shape: Role;
                Name: "Role";
                Nullable: false;
            };
            permission: {
                Shape: Permission;
                Name: "Permission";
                Nullable: false;
            };
        };
    };
    UserPermission: {
        Name: "UserPermission";
        Shape: UserPermission;
        Include: Prisma.UserPermissionInclude;
        Select: Prisma.UserPermissionSelect;
        OrderBy: Prisma.UserPermissionOrderByWithRelationInput;
        WhereUnique: Prisma.UserPermissionWhereUniqueInput;
        Where: Prisma.UserPermissionWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "permission";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            permission: {
                Shape: Permission;
                Name: "Permission";
                Nullable: false;
            };
        };
    };
    UserRole: {
        Name: "UserRole";
        Shape: UserRole;
        Include: Prisma.UserRoleInclude;
        Select: Prisma.UserRoleSelect;
        OrderBy: Prisma.UserRoleOrderByWithRelationInput;
        WhereUnique: Prisma.UserRoleWhereUniqueInput;
        Where: Prisma.UserRoleWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "role";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            role: {
                Shape: Role;
                Name: "Role";
                Nullable: false;
            };
        };
    };
    CourseCategory: {
        Name: "CourseCategory";
        Shape: CourseCategory;
        Include: Prisma.CourseCategoryInclude;
        Select: Prisma.CourseCategorySelect;
        OrderBy: Prisma.CourseCategoryOrderByWithRelationInput;
        WhereUnique: Prisma.CourseCategoryWhereUniqueInput;
        Where: Prisma.CourseCategoryWhereInput;
        Create: {};
        Update: {};
        RelationName: "tenant" | "parent" | "children" | "courses";
        ListRelations: "children" | "courses";
        Relations: {
            tenant: {
                Shape: Tenant;
                Name: "Tenant";
                Nullable: false;
            };
            parent: {
                Shape: CourseCategory | null;
                Name: "CourseCategory";
                Nullable: true;
            };
            children: {
                Shape: CourseCategory[];
                Name: "CourseCategory";
                Nullable: false;
            };
            courses: {
                Shape: Course[];
                Name: "Course";
                Nullable: false;
            };
        };
    };
    Course: {
        Name: "Course";
        Shape: Course;
        Include: Prisma.CourseInclude;
        Select: Prisma.CourseSelect;
        OrderBy: Prisma.CourseOrderByWithRelationInput;
        WhereUnique: Prisma.CourseWhereUniqueInput;
        Where: Prisma.CourseWhereInput;
        Create: {};
        Update: {};
        RelationName: "tenant" | "category" | "sections" | "enrollments" | "courseTags" | "announcements" | "certificates" | "certificateTemplates";
        ListRelations: "sections" | "enrollments" | "courseTags" | "announcements" | "certificates" | "certificateTemplates";
        Relations: {
            tenant: {
                Shape: Tenant;
                Name: "Tenant";
                Nullable: false;
            };
            category: {
                Shape: CourseCategory | null;
                Name: "CourseCategory";
                Nullable: true;
            };
            sections: {
                Shape: CourseSection[];
                Name: "CourseSection";
                Nullable: false;
            };
            enrollments: {
                Shape: Enrollment[];
                Name: "Enrollment";
                Nullable: false;
            };
            courseTags: {
                Shape: CourseTag[];
                Name: "CourseTag";
                Nullable: false;
            };
            announcements: {
                Shape: Announcement[];
                Name: "Announcement";
                Nullable: false;
            };
            certificates: {
                Shape: Certificate[];
                Name: "Certificate";
                Nullable: false;
            };
            certificateTemplates: {
                Shape: CertificateTemplate[];
                Name: "CertificateTemplate";
                Nullable: false;
            };
        };
    };
    CourseSection: {
        Name: "CourseSection";
        Shape: CourseSection;
        Include: Prisma.CourseSectionInclude;
        Select: Prisma.CourseSectionSelect;
        OrderBy: Prisma.CourseSectionOrderByWithRelationInput;
        WhereUnique: Prisma.CourseSectionWhereUniqueInput;
        Where: Prisma.CourseSectionWhereInput;
        Create: {};
        Update: {};
        RelationName: "course" | "lessons";
        ListRelations: "lessons";
        Relations: {
            course: {
                Shape: Course;
                Name: "Course";
                Nullable: false;
            };
            lessons: {
                Shape: Lesson[];
                Name: "Lesson";
                Nullable: false;
            };
        };
    };
    Lesson: {
        Name: "Lesson";
        Shape: Lesson;
        Include: Prisma.LessonInclude;
        Select: Prisma.LessonSelect;
        OrderBy: Prisma.LessonOrderByWithRelationInput;
        WhereUnique: Prisma.LessonWhereUniqueInput;
        Where: Prisma.LessonWhereInput;
        Create: {};
        Update: {};
        RelationName: "courseSection" | "progresses" | "resources" | "quizzes" | "assignments" | "discussionThreads";
        ListRelations: "progresses" | "resources" | "quizzes" | "assignments" | "discussionThreads";
        Relations: {
            courseSection: {
                Shape: CourseSection;
                Name: "CourseSection";
                Nullable: false;
            };
            progresses: {
                Shape: LessonProgress[];
                Name: "LessonProgress";
                Nullable: false;
            };
            resources: {
                Shape: LessonResource[];
                Name: "LessonResource";
                Nullable: false;
            };
            quizzes: {
                Shape: Quiz[];
                Name: "Quiz";
                Nullable: false;
            };
            assignments: {
                Shape: Assignment[];
                Name: "Assignment";
                Nullable: false;
            };
            discussionThreads: {
                Shape: DiscussionThread[];
                Name: "DiscussionThread";
                Nullable: false;
            };
        };
    };
    Enrollment: {
        Name: "Enrollment";
        Shape: Enrollment;
        Include: Prisma.EnrollmentInclude;
        Select: Prisma.EnrollmentSelect;
        OrderBy: Prisma.EnrollmentOrderByWithRelationInput;
        WhereUnique: Prisma.EnrollmentWhereUniqueInput;
        Where: Prisma.EnrollmentWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "course" | "grades";
        ListRelations: "grades";
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            course: {
                Shape: Course;
                Name: "Course";
                Nullable: false;
            };
            grades: {
                Shape: Grade[];
                Name: "Grade";
                Nullable: false;
            };
        };
    };
    LessonProgress: {
        Name: "LessonProgress";
        Shape: LessonProgress;
        Include: Prisma.LessonProgressInclude;
        Select: Prisma.LessonProgressSelect;
        OrderBy: Prisma.LessonProgressOrderByWithRelationInput;
        WhereUnique: Prisma.LessonProgressWhereUniqueInput;
        Where: Prisma.LessonProgressWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "lesson";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            lesson: {
                Shape: Lesson;
                Name: "Lesson";
                Nullable: false;
            };
        };
    };
    Quiz: {
        Name: "Quiz";
        Shape: Quiz;
        Include: Prisma.QuizInclude;
        Select: Prisma.QuizSelect;
        OrderBy: Prisma.QuizOrderByWithRelationInput;
        WhereUnique: Prisma.QuizWhereUniqueInput;
        Where: Prisma.QuizWhereInput;
        Create: {};
        Update: {};
        RelationName: "lesson" | "questions" | "attempts";
        ListRelations: "questions" | "attempts";
        Relations: {
            lesson: {
                Shape: Lesson;
                Name: "Lesson";
                Nullable: false;
            };
            questions: {
                Shape: QuizQuestion[];
                Name: "QuizQuestion";
                Nullable: false;
            };
            attempts: {
                Shape: QuizAttempt[];
                Name: "QuizAttempt";
                Nullable: false;
            };
        };
    };
    QuizQuestion: {
        Name: "QuizQuestion";
        Shape: QuizQuestion;
        Include: Prisma.QuizQuestionInclude;
        Select: Prisma.QuizQuestionSelect;
        OrderBy: Prisma.QuizQuestionOrderByWithRelationInput;
        WhereUnique: Prisma.QuizQuestionWhereUniqueInput;
        Where: Prisma.QuizQuestionWhereInput;
        Create: {};
        Update: {};
        RelationName: "quiz" | "answers";
        ListRelations: "answers";
        Relations: {
            quiz: {
                Shape: Quiz;
                Name: "Quiz";
                Nullable: false;
            };
            answers: {
                Shape: QuizAnswer[];
                Name: "QuizAnswer";
                Nullable: false;
            };
        };
    };
    QuizAnswer: {
        Name: "QuizAnswer";
        Shape: QuizAnswer;
        Include: Prisma.QuizAnswerInclude;
        Select: Prisma.QuizAnswerSelect;
        OrderBy: Prisma.QuizAnswerOrderByWithRelationInput;
        WhereUnique: Prisma.QuizAnswerWhereUniqueInput;
        Where: Prisma.QuizAnswerWhereInput;
        Create: {};
        Update: {};
        RelationName: "question";
        ListRelations: never;
        Relations: {
            question: {
                Shape: QuizQuestion;
                Name: "QuizQuestion";
                Nullable: false;
            };
        };
    };
    QuizAttempt: {
        Name: "QuizAttempt";
        Shape: QuizAttempt;
        Include: Prisma.QuizAttemptInclude;
        Select: Prisma.QuizAttemptSelect;
        OrderBy: Prisma.QuizAttemptOrderByWithRelationInput;
        WhereUnique: Prisma.QuizAttemptWhereUniqueInput;
        Where: Prisma.QuizAttemptWhereInput;
        Create: {};
        Update: {};
        RelationName: "quiz" | "user";
        ListRelations: never;
        Relations: {
            quiz: {
                Shape: Quiz;
                Name: "Quiz";
                Nullable: false;
            };
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    Assignment: {
        Name: "Assignment";
        Shape: Assignment;
        Include: Prisma.AssignmentInclude;
        Select: Prisma.AssignmentSelect;
        OrderBy: Prisma.AssignmentOrderByWithRelationInput;
        WhereUnique: Prisma.AssignmentWhereUniqueInput;
        Where: Prisma.AssignmentWhereInput;
        Create: {};
        Update: {};
        RelationName: "lesson" | "assignmentSubmissions" | "submissions";
        ListRelations: "assignmentSubmissions" | "submissions";
        Relations: {
            lesson: {
                Shape: Lesson;
                Name: "Lesson";
                Nullable: false;
            };
            assignmentSubmissions: {
                Shape: AssignmentSubmission[];
                Name: "AssignmentSubmission";
                Nullable: false;
            };
            submissions: {
                Shape: Submission[];
                Name: "Submission";
                Nullable: false;
            };
        };
    };
    AssignmentSubmission: {
        Name: "AssignmentSubmission";
        Shape: AssignmentSubmission;
        Include: Prisma.AssignmentSubmissionInclude;
        Select: Prisma.AssignmentSubmissionSelect;
        OrderBy: Prisma.AssignmentSubmissionOrderByWithRelationInput;
        WhereUnique: Prisma.AssignmentSubmissionWhereUniqueInput;
        Where: Prisma.AssignmentSubmissionWhereInput;
        Create: {};
        Update: {};
        RelationName: "assignment" | "user" | "grades";
        ListRelations: "grades";
        Relations: {
            assignment: {
                Shape: Assignment;
                Name: "Assignment";
                Nullable: false;
            };
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            grades: {
                Shape: Grade[];
                Name: "Grade";
                Nullable: false;
            };
        };
    };
    Submission: {
        Name: "Submission";
        Shape: Submission;
        Include: Prisma.SubmissionInclude;
        Select: Prisma.SubmissionSelect;
        OrderBy: Prisma.SubmissionOrderByWithRelationInput;
        WhereUnique: Prisma.SubmissionWhereUniqueInput;
        Where: Prisma.SubmissionWhereInput;
        Create: {};
        Update: {};
        RelationName: "assignment" | "user";
        ListRelations: never;
        Relations: {
            assignment: {
                Shape: Assignment;
                Name: "Assignment";
                Nullable: false;
            };
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    Grade: {
        Name: "Grade";
        Shape: Grade;
        Include: Prisma.GradeInclude;
        Select: Prisma.GradeSelect;
        OrderBy: Prisma.GradeOrderByWithRelationInput;
        WhereUnique: Prisma.GradeWhereUniqueInput;
        Where: Prisma.GradeWhereInput;
        Create: {};
        Update: {};
        RelationName: "enrollment" | "submission";
        ListRelations: never;
        Relations: {
            enrollment: {
                Shape: Enrollment;
                Name: "Enrollment";
                Nullable: false;
            };
            submission: {
                Shape: AssignmentSubmission | null;
                Name: "AssignmentSubmission";
                Nullable: true;
            };
        };
    };
    DiscussionThread: {
        Name: "DiscussionThread";
        Shape: DiscussionThread;
        Include: Prisma.DiscussionThreadInclude;
        Select: Prisma.DiscussionThreadSelect;
        OrderBy: Prisma.DiscussionThreadOrderByWithRelationInput;
        WhereUnique: Prisma.DiscussionThreadWhereUniqueInput;
        Where: Prisma.DiscussionThreadWhereInput;
        Create: {};
        Update: {};
        RelationName: "lesson" | "posts";
        ListRelations: "posts";
        Relations: {
            lesson: {
                Shape: Lesson;
                Name: "Lesson";
                Nullable: false;
            };
            posts: {
                Shape: DiscussionPost[];
                Name: "DiscussionPost";
                Nullable: false;
            };
        };
    };
    DiscussionPost: {
        Name: "DiscussionPost";
        Shape: DiscussionPost;
        Include: Prisma.DiscussionPostInclude;
        Select: Prisma.DiscussionPostSelect;
        OrderBy: Prisma.DiscussionPostOrderByWithRelationInput;
        WhereUnique: Prisma.DiscussionPostWhereUniqueInput;
        Where: Prisma.DiscussionPostWhereInput;
        Create: {};
        Update: {};
        RelationName: "thread" | "user" | "parent" | "replies";
        ListRelations: "replies";
        Relations: {
            thread: {
                Shape: DiscussionThread;
                Name: "DiscussionThread";
                Nullable: false;
            };
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            parent: {
                Shape: DiscussionPost | null;
                Name: "DiscussionPost";
                Nullable: true;
            };
            replies: {
                Shape: DiscussionPost[];
                Name: "DiscussionPost";
                Nullable: false;
            };
        };
    };
    Announcement: {
        Name: "Announcement";
        Shape: Announcement;
        Include: Prisma.AnnouncementInclude;
        Select: Prisma.AnnouncementSelect;
        OrderBy: Prisma.AnnouncementOrderByWithRelationInput;
        WhereUnique: Prisma.AnnouncementWhereUniqueInput;
        Where: Prisma.AnnouncementWhereInput;
        Create: {};
        Update: {};
        RelationName: "course";
        ListRelations: never;
        Relations: {
            course: {
                Shape: Course;
                Name: "Course";
                Nullable: false;
            };
        };
    };
    CertificateTemplate: {
        Name: "CertificateTemplate";
        Shape: CertificateTemplate;
        Include: Prisma.CertificateTemplateInclude;
        Select: Prisma.CertificateTemplateSelect;
        OrderBy: Prisma.CertificateTemplateOrderByWithRelationInput;
        WhereUnique: Prisma.CertificateTemplateWhereUniqueInput;
        Where: Prisma.CertificateTemplateWhereInput;
        Create: {};
        Update: {};
        RelationName: "tenant" | "courses" | "certificates";
        ListRelations: "courses" | "certificates";
        Relations: {
            tenant: {
                Shape: Tenant;
                Name: "Tenant";
                Nullable: false;
            };
            courses: {
                Shape: Course[];
                Name: "Course";
                Nullable: false;
            };
            certificates: {
                Shape: Certificate[];
                Name: "Certificate";
                Nullable: false;
            };
        };
    };
    Certificate: {
        Name: "Certificate";
        Shape: Certificate;
        Include: Prisma.CertificateInclude;
        Select: Prisma.CertificateSelect;
        OrderBy: Prisma.CertificateOrderByWithRelationInput;
        WhereUnique: Prisma.CertificateWhereUniqueInput;
        Where: Prisma.CertificateWhereInput;
        Create: {};
        Update: {};
        RelationName: "course" | "user" | "template";
        ListRelations: never;
        Relations: {
            course: {
                Shape: Course;
                Name: "Course";
                Nullable: false;
            };
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            template: {
                Shape: CertificateTemplate | null;
                Name: "CertificateTemplate";
                Nullable: true;
            };
        };
    };
    File: {
        Name: "File";
        Shape: File;
        Include: never;
        Select: Prisma.FileSelect;
        OrderBy: Prisma.FileOrderByWithRelationInput;
        WhereUnique: Prisma.FileWhereUniqueInput;
        Where: Prisma.FileWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    LessonResource: {
        Name: "LessonResource";
        Shape: LessonResource;
        Include: Prisma.LessonResourceInclude;
        Select: Prisma.LessonResourceSelect;
        OrderBy: Prisma.LessonResourceOrderByWithRelationInput;
        WhereUnique: Prisma.LessonResourceWhereUniqueInput;
        Where: Prisma.LessonResourceWhereInput;
        Create: {};
        Update: {};
        RelationName: "lesson";
        ListRelations: never;
        Relations: {
            lesson: {
                Shape: Lesson;
                Name: "Lesson";
                Nullable: false;
            };
        };
    };
    Tag: {
        Name: "Tag";
        Shape: Tag;
        Include: Prisma.TagInclude;
        Select: Prisma.TagSelect;
        OrderBy: Prisma.TagOrderByWithRelationInput;
        WhereUnique: Prisma.TagWhereUniqueInput;
        Where: Prisma.TagWhereInput;
        Create: {};
        Update: {};
        RelationName: "courseTags";
        ListRelations: "courseTags";
        Relations: {
            courseTags: {
                Shape: CourseTag[];
                Name: "CourseTag";
                Nullable: false;
            };
        };
    };
    CourseTag: {
        Name: "CourseTag";
        Shape: CourseTag;
        Include: Prisma.CourseTagInclude;
        Select: Prisma.CourseTagSelect;
        OrderBy: Prisma.CourseTagOrderByWithRelationInput;
        WhereUnique: Prisma.CourseTagWhereUniqueInput;
        Where: Prisma.CourseTagWhereInput;
        Create: {};
        Update: {};
        RelationName: "course" | "tag";
        ListRelations: never;
        Relations: {
            course: {
                Shape: Course;
                Name: "Course";
                Nullable: false;
            };
            tag: {
                Shape: Tag;
                Name: "Tag";
                Nullable: false;
            };
        };
    };
    Author: {
        Name: "Author";
        Shape: Author;
        Include: Prisma.AuthorInclude;
        Select: Prisma.AuthorSelect;
        OrderBy: Prisma.AuthorOrderByWithRelationInput;
        WhereUnique: Prisma.AuthorWhereUniqueInput;
        Where: Prisma.AuthorWhereInput;
        Create: {};
        Update: {};
        RelationName: "posts";
        ListRelations: "posts";
        Relations: {
            posts: {
                Shape: BlogPost[];
                Name: "BlogPost";
                Nullable: false;
            };
        };
    };
    BlogPost: {
        Name: "BlogPost";
        Shape: BlogPost;
        Include: Prisma.BlogPostInclude;
        Select: Prisma.BlogPostSelect;
        OrderBy: Prisma.BlogPostOrderByWithRelationInput;
        WhereUnique: Prisma.BlogPostWhereUniqueInput;
        Where: Prisma.BlogPostWhereInput;
        Create: {};
        Update: {};
        RelationName: "author";
        ListRelations: never;
        Relations: {
            author: {
                Shape: Author;
                Name: "Author";
                Nullable: false;
            };
        };
    };
    Webhook: {
        Name: "Webhook";
        Shape: Webhook;
        Include: Prisma.WebhookInclude;
        Select: Prisma.WebhookSelect;
        OrderBy: Prisma.WebhookOrderByWithRelationInput;
        WhereUnique: Prisma.WebhookWhereUniqueInput;
        Where: Prisma.WebhookWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    ApiToken: {
        Name: "ApiToken";
        Shape: ApiToken;
        Include: Prisma.ApiTokenInclude;
        Select: Prisma.ApiTokenSelect;
        OrderBy: Prisma.ApiTokenOrderByWithRelationInput;
        WhereUnique: Prisma.ApiTokenWhereUniqueInput;
        Where: Prisma.ApiTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    Notification: {
        Name: "Notification";
        Shape: Notification;
        Include: Prisma.NotificationInclude;
        Select: Prisma.NotificationSelect;
        OrderBy: Prisma.NotificationOrderByWithRelationInput;
        WhereUnique: Prisma.NotificationWhereUniqueInput;
        Where: Prisma.NotificationWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    AuditLog: {
        Name: "AuditLog";
        Shape: AuditLog;
        Include: Prisma.AuditLogInclude;
        Select: Prisma.AuditLogSelect;
        OrderBy: Prisma.AuditLogOrderByWithRelationInput;
        WhereUnique: Prisma.AuditLogWhereUniqueInput;
        Where: Prisma.AuditLogWhereInput;
        Create: {};
        Update: {};
        RelationName: "tenant" | "user" | "changes";
        ListRelations: "changes";
        Relations: {
            tenant: {
                Shape: Tenant;
                Name: "Tenant";
                Nullable: false;
            };
            user: {
                Shape: User | null;
                Name: "User";
                Nullable: true;
            };
            changes: {
                Shape: AuditLogChange[];
                Name: "AuditLogChange";
                Nullable: false;
            };
        };
    };
    AuditLogChange: {
        Name: "AuditLogChange";
        Shape: AuditLogChange;
        Include: Prisma.AuditLogChangeInclude;
        Select: Prisma.AuditLogChangeSelect;
        OrderBy: Prisma.AuditLogChangeOrderByWithRelationInput;
        WhereUnique: Prisma.AuditLogChangeWhereUniqueInput;
        Where: Prisma.AuditLogChangeWhereInput;
        Create: {};
        Update: {};
        RelationName: "auditLog";
        ListRelations: never;
        Relations: {
            auditLog: {
                Shape: AuditLog;
                Name: "AuditLog";
                Nullable: false;
            };
        };
    };
    AuthLog: {
        Name: "AuthLog";
        Shape: AuthLog;
        Include: Prisma.AuthLogInclude;
        Select: Prisma.AuthLogSelect;
        OrderBy: Prisma.AuthLogOrderByWithRelationInput;
        WhereUnique: Prisma.AuthLogWhereUniqueInput;
        Where: Prisma.AuthLogWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
                Nullable: true;
            };
        };
    };
    UserActivity: {
        Name: "UserActivity";
        Shape: UserActivity;
        Include: Prisma.UserActivityInclude;
        Select: Prisma.UserActivitySelect;
        OrderBy: Prisma.UserActivityOrderByWithRelationInput;
        WhereUnique: Prisma.UserActivityWhereUniqueInput;
        Where: Prisma.UserActivityWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
}
export function getDatamodel(): PothosPrismaDatamodel { return JSON.parse("{\"datamodel\":{\"models\":{\"Tenant\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"domain\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"users\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TenantToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Profile\",\"kind\":\"object\",\"name\":\"profiles\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"ProfileToTenant\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Role\",\"kind\":\"object\",\"name\":\"roles\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"RoleToTenant\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Course\",\"kind\":\"object\",\"name\":\"courses\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToTenant\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"CourseCategory\",\"kind\":\"object\",\"name\":\"courseCategories\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseCategoryToTenant\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"AuditLog\",\"kind\":\"object\",\"name\":\"auditLogs\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuditLogToTenant\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"CertificateTemplate\",\"kind\":\"object\",\"name\":\"certificateTemplates\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateTemplateToTenant\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"User\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tenantId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"profileId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"email\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"password\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"UserStatus\",\"kind\":\"enum\",\"name\":\"status\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Boolean\",\"kind\":\"scalar\",\"name\":\"isDeleted\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"deletedAt\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Tenant\",\"kind\":\"object\",\"name\":\"tenant\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TenantToUser\",\"relationFromFields\":[\"tenantId\"],\"isUpdatedAt\":false},{\"type\":\"Profile\",\"kind\":\"object\",\"name\":\"profile\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"ProfileToUser\",\"relationFromFields\":[\"profileId\"],\"isUpdatedAt\":false},{\"type\":\"UserRole\",\"kind\":\"object\",\"name\":\"roles\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserRole\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"UserPermission\",\"kind\":\"object\",\"name\":\"userPermissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserPermission\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Enrollment\",\"kind\":\"object\",\"name\":\"enrollments\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"EnrollmentToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"LessonProgress\",\"kind\":\"object\",\"name\":\"lessonProgresses\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"LessonProgressToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"QuizAttempt\",\"kind\":\"object\",\"name\":\"quizAttempts\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"QuizAttemptToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"AssignmentSubmission\",\"kind\":\"object\",\"name\":\"assignmentSubmissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentSubmissionToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Submission\",\"kind\":\"object\",\"name\":\"submissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"SubmissionToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"DiscussionPost\",\"kind\":\"object\",\"name\":\"discussionPosts\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"DiscussionPostToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Certificate\",\"kind\":\"object\",\"name\":\"certificates\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Webhook\",\"kind\":\"object\",\"name\":\"webhooks\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToWebhook\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"ApiToken\",\"kind\":\"object\",\"name\":\"apiTokens\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"ApiTokenToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Notification\",\"kind\":\"object\",\"name\":\"notifications\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"NotificationToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"AuditLog\",\"kind\":\"object\",\"name\":\"auditLogs\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuditLogToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"AuthLog\",\"kind\":\"object\",\"name\":\"authLogs\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuthLogToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"UserActivity\",\"kind\":\"object\",\"name\":\"userActivities\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserActivity\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenantId\",\"email\"]}]},\"Profile\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tenantId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Tenant\",\"kind\":\"object\",\"name\":\"tenant\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"ProfileToTenant\",\"relationFromFields\":[\"tenantId\"],\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"users\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"ProfileToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"ProfilePermission\",\"kind\":\"object\",\"name\":\"profilePermissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"ProfileToProfilePermission\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenantId\",\"name\"]}]},\"Role\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tenantId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Tenant\",\"kind\":\"object\",\"name\":\"tenant\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"RoleToTenant\",\"relationFromFields\":[\"tenantId\"],\"isUpdatedAt\":false},{\"type\":\"UserRole\",\"kind\":\"object\",\"name\":\"users\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"RoleToUserRole\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"RolePermission\",\"kind\":\"object\",\"name\":\"rolePermissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"RoleToRolePermission\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenantId\",\"name\"]}]},\"Permission\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"key\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"category\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"description\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"ProfilePermission\",\"kind\":\"object\",\"name\":\"profilePermissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"PermissionToProfilePermission\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"RolePermission\",\"kind\":\"object\",\"name\":\"rolePermissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"PermissionToRolePermission\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"UserPermission\",\"kind\":\"object\",\"name\":\"userPermissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"PermissionToUserPermission\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"ProfilePermission\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"profileId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"permissionId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Profile\",\"kind\":\"object\",\"name\":\"profile\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"ProfileToProfilePermission\",\"relationFromFields\":[\"profileId\"],\"isUpdatedAt\":false},{\"type\":\"Permission\",\"kind\":\"object\",\"name\":\"permission\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"PermissionToProfilePermission\",\"relationFromFields\":[\"permissionId\"],\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"profileId\",\"permissionId\"]},\"uniqueIndexes\":[]},\"RolePermission\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"roleId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"permissionId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Role\",\"kind\":\"object\",\"name\":\"role\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"RoleToRolePermission\",\"relationFromFields\":[\"roleId\"],\"isUpdatedAt\":false},{\"type\":\"Permission\",\"kind\":\"object\",\"name\":\"permission\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"PermissionToRolePermission\",\"relationFromFields\":[\"permissionId\"],\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"roleId\",\"permissionId\"]},\"uniqueIndexes\":[]},\"UserPermission\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"permissionId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Boolean\",\"kind\":\"scalar\",\"name\":\"isAllowed\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserPermission\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"Permission\",\"kind\":\"object\",\"name\":\"permission\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"PermissionToUserPermission\",\"relationFromFields\":[\"permissionId\"],\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"permissionId\"]},\"uniqueIndexes\":[]},\"UserRole\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"roleId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserRole\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"Role\",\"kind\":\"object\",\"name\":\"role\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"RoleToUserRole\",\"relationFromFields\":[\"roleId\"],\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"roleId\"]},\"uniqueIndexes\":[]},\"CourseCategory\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tenantId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"description\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"parentId\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Tenant\",\"kind\":\"object\",\"name\":\"tenant\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseCategoryToTenant\",\"relationFromFields\":[\"tenantId\"],\"isUpdatedAt\":false},{\"type\":\"CourseCategory\",\"kind\":\"object\",\"name\":\"parent\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CategoryParent\",\"relationFromFields\":[\"parentId\"],\"isUpdatedAt\":false},{\"type\":\"CourseCategory\",\"kind\":\"object\",\"name\":\"children\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CategoryParent\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Course\",\"kind\":\"object\",\"name\":\"courses\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToCourseCategory\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenantId\",\"name\"]}]},\"Course\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tenantId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"categoryId\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"description\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Decimal\",\"kind\":\"scalar\",\"name\":\"price\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Boolean\",\"kind\":\"scalar\",\"name\":\"published\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Tenant\",\"kind\":\"object\",\"name\":\"tenant\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToTenant\",\"relationFromFields\":[\"tenantId\"],\"isUpdatedAt\":false},{\"type\":\"CourseCategory\",\"kind\":\"object\",\"name\":\"category\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToCourseCategory\",\"relationFromFields\":[\"categoryId\"],\"isUpdatedAt\":false},{\"type\":\"CourseSection\",\"kind\":\"object\",\"name\":\"sections\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToCourseSection\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Enrollment\",\"kind\":\"object\",\"name\":\"enrollments\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToEnrollment\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"CourseTag\",\"kind\":\"object\",\"name\":\"courseTags\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToCourseTag\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Announcement\",\"kind\":\"object\",\"name\":\"announcements\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AnnouncementToCourse\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Certificate\",\"kind\":\"object\",\"name\":\"certificates\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateToCourse\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"CertificateTemplate\",\"kind\":\"object\",\"name\":\"certificateTemplates\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateTemplateToCourse\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"CourseSection\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"courseId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Int\",\"kind\":\"scalar\",\"name\":\"order\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Course\",\"kind\":\"object\",\"name\":\"course\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToCourseSection\",\"relationFromFields\":[\"courseId\"],\"isUpdatedAt\":false},{\"type\":\"Lesson\",\"kind\":\"object\",\"name\":\"lessons\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseSectionToLesson\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Lesson\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"courseSectionId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"content\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Int\",\"kind\":\"scalar\",\"name\":\"order\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"CourseSection\",\"kind\":\"object\",\"name\":\"courseSection\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseSectionToLesson\",\"relationFromFields\":[\"courseSectionId\"],\"isUpdatedAt\":false},{\"type\":\"LessonProgress\",\"kind\":\"object\",\"name\":\"progresses\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"LessonToLessonProgress\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"LessonResource\",\"kind\":\"object\",\"name\":\"resources\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"LessonToLessonResource\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Quiz\",\"kind\":\"object\",\"name\":\"quizzes\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"LessonToQuiz\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Assignment\",\"kind\":\"object\",\"name\":\"assignments\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentToLesson\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"DiscussionThread\",\"kind\":\"object\",\"name\":\"discussionThreads\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"DiscussionThreadToLesson\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Enrollment\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"courseId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"EnrollmentStatus\",\"kind\":\"enum\",\"name\":\"status\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"enrolledAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"completedAt\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"EnrollmentToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"Course\",\"kind\":\"object\",\"name\":\"course\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToEnrollment\",\"relationFromFields\":[\"courseId\"],\"isUpdatedAt\":false},{\"type\":\"Grade\",\"kind\":\"object\",\"name\":\"grades\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"EnrollmentToGrade\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"courseId\"]}]},\"LessonProgress\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"lessonId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Boolean\",\"kind\":\"scalar\",\"name\":\"isCompleted\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"LessonProgressToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"Lesson\",\"kind\":\"object\",\"name\":\"lesson\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"LessonToLessonProgress\",\"relationFromFields\":[\"lessonId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"lessonId\"]}]},\"Quiz\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"lessonId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"description\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Lesson\",\"kind\":\"object\",\"name\":\"lesson\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"LessonToQuiz\",\"relationFromFields\":[\"lessonId\"],\"isUpdatedAt\":false},{\"type\":\"QuizQuestion\",\"kind\":\"object\",\"name\":\"questions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"QuizToQuizQuestion\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"QuizAttempt\",\"kind\":\"object\",\"name\":\"attempts\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"QuizToQuizAttempt\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"QuizQuestion\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"quizId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"QuizType\",\"kind\":\"enum\",\"name\":\"type\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"prompt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Int\",\"kind\":\"scalar\",\"name\":\"order\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Quiz\",\"kind\":\"object\",\"name\":\"quiz\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"QuizToQuizQuestion\",\"relationFromFields\":[\"quizId\"],\"isUpdatedAt\":false},{\"type\":\"QuizAnswer\",\"kind\":\"object\",\"name\":\"answers\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"QuizAnswerToQuizQuestion\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"QuizAnswer\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"quizQuestionId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"text\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Boolean\",\"kind\":\"scalar\",\"name\":\"isCorrect\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"QuizQuestion\",\"kind\":\"object\",\"name\":\"question\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"QuizAnswerToQuizQuestion\",\"relationFromFields\":[\"quizQuestionId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"QuizAttempt\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"quizId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Float\",\"kind\":\"scalar\",\"name\":\"score\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"startedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"completedAt\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Quiz\",\"kind\":\"object\",\"name\":\"quiz\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"QuizToQuizAttempt\",\"relationFromFields\":[\"quizId\"],\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"QuizAttemptToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Assignment\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"lessonId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"description\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"dueDate\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Lesson\",\"kind\":\"object\",\"name\":\"lesson\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentToLesson\",\"relationFromFields\":[\"lessonId\"],\"isUpdatedAt\":false},{\"type\":\"AssignmentSubmission\",\"kind\":\"object\",\"name\":\"assignmentSubmissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentToAssignmentSubmission\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Submission\",\"kind\":\"object\",\"name\":\"submissions\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentToSubmission\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"AssignmentSubmission\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"assignmentId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"content\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"fileUrl\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"submittedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Assignment\",\"kind\":\"object\",\"name\":\"assignment\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentToAssignmentSubmission\",\"relationFromFields\":[\"assignmentId\"],\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentSubmissionToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"Grade\",\"kind\":\"object\",\"name\":\"grades\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentSubmissionToGrade\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"assignmentId\",\"userId\"]}]},\"Submission\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"assignmentId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"content\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"fileUrl\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"submittedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Assignment\",\"kind\":\"object\",\"name\":\"assignment\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentToSubmission\",\"relationFromFields\":[\"assignmentId\"],\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"SubmissionToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"assignmentId\",\"userId\"]}]},\"Grade\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"enrollmentId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"submissionId\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Float\",\"kind\":\"scalar\",\"name\":\"score\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"feedback\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Enrollment\",\"kind\":\"object\",\"name\":\"enrollment\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"EnrollmentToGrade\",\"relationFromFields\":[\"enrollmentId\"],\"isUpdatedAt\":false},{\"type\":\"AssignmentSubmission\",\"kind\":\"object\",\"name\":\"submission\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AssignmentSubmissionToGrade\",\"relationFromFields\":[\"submissionId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"DiscussionThread\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"lessonId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Lesson\",\"kind\":\"object\",\"name\":\"lesson\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"DiscussionThreadToLesson\",\"relationFromFields\":[\"lessonId\"],\"isUpdatedAt\":false},{\"type\":\"DiscussionPost\",\"kind\":\"object\",\"name\":\"posts\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"DiscussionPostToDiscussionThread\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"DiscussionPost\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"threadId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"parentId\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"content\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"DiscussionThread\",\"kind\":\"object\",\"name\":\"thread\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"DiscussionPostToDiscussionThread\",\"relationFromFields\":[\"threadId\"],\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"DiscussionPostToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"DiscussionPost\",\"kind\":\"object\",\"name\":\"parent\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"PostReplies\",\"relationFromFields\":[\"parentId\"],\"isUpdatedAt\":false},{\"type\":\"DiscussionPost\",\"kind\":\"object\",\"name\":\"replies\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"PostReplies\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Announcement\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"courseId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"content\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Course\",\"kind\":\"object\",\"name\":\"course\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AnnouncementToCourse\",\"relationFromFields\":[\"courseId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"CertificateTemplate\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tenantId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"description\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"layoutUrl\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Json\",\"kind\":\"scalar\",\"name\":\"fields\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Tenant\",\"kind\":\"object\",\"name\":\"tenant\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateTemplateToTenant\",\"relationFromFields\":[\"tenantId\"],\"isUpdatedAt\":false},{\"type\":\"Course\",\"kind\":\"object\",\"name\":\"courses\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateTemplateToCourse\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Certificate\",\"kind\":\"object\",\"name\":\"certificates\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateToCertificateTemplate\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenantId\",\"name\"]}]},\"Certificate\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"courseId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"templateId\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"url\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"issuedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Course\",\"kind\":\"object\",\"name\":\"course\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateToCourse\",\"relationFromFields\":[\"courseId\"],\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"CertificateTemplate\",\"kind\":\"object\",\"name\":\"template\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CertificateToCertificateTemplate\",\"relationFromFields\":[\"templateId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"courseId\",\"userId\"]}]},\"File\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tenantId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"url\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"fileName\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"contentType\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Int\",\"kind\":\"scalar\",\"name\":\"size\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"LessonResource\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"lessonId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"url\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"Lesson\",\"kind\":\"object\",\"name\":\"lesson\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"LessonToLessonResource\",\"relationFromFields\":[\"lessonId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Tag\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"CourseTag\",\"kind\":\"object\",\"name\":\"courseTags\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseTagToTag\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"CourseTag\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"courseId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tagId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Course\",\"kind\":\"object\",\"name\":\"course\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseToCourseTag\",\"relationFromFields\":[\"courseId\"],\"isUpdatedAt\":false},{\"type\":\"Tag\",\"kind\":\"object\",\"name\":\"tag\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"CourseTagToTag\",\"relationFromFields\":[\"tagId\"],\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"courseId\",\"tagId\"]},\"uniqueIndexes\":[]},\"Author\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"avatar\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"BlogPost\",\"kind\":\"object\",\"name\":\"posts\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuthorToBlogPost\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"BlogPost\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"slug\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"excerpt\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"content\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"category\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"readTime\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"featuredImage\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"authorId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Author\",\"kind\":\"object\",\"name\":\"author\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuthorToBlogPost\",\"relationFromFields\":[\"authorId\"],\"isUpdatedAt\":false},{\"type\":\"Boolean\",\"kind\":\"scalar\",\"name\":\"published\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Webhook\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"url\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Json\",\"kind\":\"scalar\",\"name\":\"events\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"secret\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Boolean\",\"kind\":\"scalar\",\"name\":\"isActive\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToWebhook\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"ApiToken\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"token\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"expiresAt\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"ApiTokenToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Notification\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"title\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"message\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Boolean\",\"kind\":\"scalar\",\"name\":\"isRead\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"linkUrl\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"updatedAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":true},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"NotificationToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"AuditLog\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"tenantId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"AuditAction\",\"kind\":\"enum\",\"name\":\"action\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"entityType\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"entityId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"ipAddress\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userAgent\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Tenant\",\"kind\":\"object\",\"name\":\"tenant\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuditLogToTenant\",\"relationFromFields\":[\"tenantId\"],\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuditLogToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"AuditLogChange\",\"kind\":\"object\",\"name\":\"changes\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuditLogToAuditLogChange\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"AuditLogChange\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"auditLogId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"field\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Json\",\"kind\":\"scalar\",\"name\":\"oldValue\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Json\",\"kind\":\"scalar\",\"name\":\"newValue\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"AuditLog\",\"kind\":\"object\",\"name\":\"auditLog\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuditLogToAuditLogChange\",\"relationFromFields\":[\"auditLogId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"AuthLog\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"AuthEventType\",\"kind\":\"enum\",\"name\":\"eventType\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"ipAddress\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userAgent\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"AuthLogToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"UserActivity\":{\"fields\":[{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"action\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Json\",\"kind\":\"scalar\",\"name\":\"metadata\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserActivity\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]}}}}"); }