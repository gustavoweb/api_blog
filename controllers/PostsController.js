const express = require('express')
const app = express()
const Posts = require('../models/Posts')

// Cadastrar um Post
exports.cadastrarPost = async (req, res) => {
    try {
      const post = await Posts.create(req.body)
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar o post' })
    }
  }