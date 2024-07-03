import Comment from '../models/comment.model.js';
import { errorHandler } from '../utils/error.js';
import Post from '../models/post.model.js';

export const createComment = async (req, res, next) => {
    try {
      const { content, postId, userId } = req.body;
  
      if (userId !== req.user.id) {
        return next(
          errorHandler(403, 'You are not allowed to create this comment')
        );
      }
  
      const newComment = new Comment({
        content,
        postId,
        userId,
      });
      await newComment.save();
  
      res.status(200).json(newComment);
    } catch (error) {
      next(error);
    }
  };

  export const getPostComments = async (req, res, next) => {
    try {
      const comments = await Comment.find({ postId: req.params.postId }).sort({
        createdAt: -1,
      });
      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  };


  export const likeComment = async (req, res, next) => {
    try {
      const comment = await Comment.findById(req.params.commentId);
      if (!comment) {
        return next(errorHandler(404, 'Comment not found'));
      }
      const userIndex = comment.likes.indexOf(req.user.id);
      if (userIndex === -1) {
        comment.numberOfLikes += 1;
        comment.likes.push(req.user.id);
      } else {
        comment.numberOfLikes -= 1;
        comment.likes.splice(userIndex, 1);
      }
      await comment.save();
      res.status(200).json(comment);
    } catch (error) {
      next(error);
    }
  };

  export const editComment = async (req, res, next) => {
    try {
      const comment = await Comment.findById(req.params.commentId);
      if (!comment) {
        return next(errorHandler(404, 'Comment not found'));
      }
      // if (comment.userId !== req.user.id && !req.user.isAdmin) {
        if (comment.userId !== req.user.id ) {

        return next(
          errorHandler(403, 'You are not allowed to edit this comment')
        );
      }
  
      const editedComment = await Comment.findByIdAndUpdate(
        req.params.commentId,
        {
          content: req.body.content,
        },
        { new: true }
      );
      res.status(200).json(editedComment);
    } catch (error) {
      next(error);
    }
  };
  

  // export const deleteComment = async (req, res, next) => {
  //   try {
  //     const comment = await Comment.findById(req.params.commentId);
  //     if (!comment) {
  //       return next(errorHandler(404, 'Comment not found'));
  //     }
  //     if (comment.userId !== req.user.id && !req.user.isAdmin) {
  //       return next(
  //         errorHandler(403, 'You are not allowed to delete this comment')
  //       );
  //     }
  //     await Comment.findByIdAndDelete(req.params.commentId);
  //     res.status(200).json('Comment has been deleted');
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  

  export const deleteComment = async (req, res, next) => {
    try {
      const comment = await Comment.findById(req.params.commentId);
      if (!comment) {
        return next(errorHandler(404, 'Comment not found'));
      }
  
      const post = await Post.findById(comment.postId);
      if (!post) {
        return next(errorHandler(404, 'Post not found'));
      }
  
      // Check if the user is the comment owner, post owner, or admin
      if (comment.userId.toString() !== req.user.id.toString() && post.userId.toString() !== req.user.id.toString() && !req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to delete this comment'));
      }
  
      await Comment.findByIdAndDelete(req.params.commentId);
      res.status(200).json('Comment has been deleted');
    } catch (error) {
      next(error);
    }
  };

  export const getcomments = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to get all comments'));
    }
    
    try {
      const limit = parseInt(req.query.limit) || 5;
      const comments = await Comment.find()
        .sort({ createdAt: -1 })
        .limit(limit)
        .populate('userId', 'username profilePicture');
      
      const totalComments = await Comment.countDocuments();
      
      const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      const lastMonthComments = await Comment.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
      
      res.status(200).json({ comments, totalComments, lastMonthComments });
    } catch (error) {
      next(error);
    }
  };
  export const getUserComments = async (req, res, next) => {
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.sort === 'desc' ? -1 : 1;
  
      // First, get all posts by the current user
      const userPosts = await Post.find({ userId: req.user.id }).select('_id');
      const userPostIds = userPosts.map(post => post._id);
  
      // Then, fetch comments for these posts
      const comments = await Comment.find({ postId: { $in: userPostIds } })
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const totalComments = await Comment.countDocuments({ postId: { $in: userPostIds } });
  
      const now = new Date();
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      const lastMonthComments = await Comment.countDocuments({
        postId: { $in: userPostIds },
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({ comments, totalComments, lastMonthComments });
    } catch (error) {
      next(error);
    }
  };