<?php

namespace AppBundle\Controller\Api;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiController extends Controller
{
    /**
     * @Route("/api/articles/get", name="api_get_articles")
     * @Method("GET")
     *
     * @return JsonResponse
     */
    public function indexAction()
    {
        $articles = $this->get('core.blog')->getArticles();

        return new JsonResponse($articles);
    }
}
